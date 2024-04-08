import Model from "./Model";
import Project from "./Project";

class Owner extends Model {
    public owner_id: number;
    public login: string;
    public html_url: string;
    public type: string;
    public avatar_url: string;
  
    constructor(owner_id: number, login: string, html_url: string, type: string, avatar_url: string) {
      super();

      this.owner_id = owner_id;
      this.login = login;
      this.html_url = html_url;
      this.type = type;
      this.avatar_url = avatar_url;
    }
  
    public static async findAll(): Promise<Owner[]> {
      const rows = await super.all('SELECT * FROM owners');
      return rows.map((row) => new Owner(row.owner_id, row.login, row.html_url, row.type, row.avatar_url));
    }

    public static async getById(owner_id: number): Promise<Owner> {
      const row = await super.get('SELECT * FROM owners WHERE owner_id = ?', [owner_id]);
      return new Owner(row.owner_id, row.login, row.html_url, row.type, row.avatar_url);
    }

    public async getProjects(): Promise<Project[]> {
      return Project.getProjectsByOwner(this.owner_id);
    }
  }
  
  export default Owner;
  