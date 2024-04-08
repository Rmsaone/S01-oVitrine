import Model from "./Model";
import Owner from "./Owner";


class Project extends Model {
    public project_id: number;
    public private: boolean;
    public archived: boolean;
    public name: string;
    public full_name: string;
    public description: string;
    public language: string;
    public html_url: string;
    public license: string;
    public ownerId: number;
    public created_at: Date;
    public updated_at: Date;

    constructor (project_id: number, private_: boolean, archived: boolean, name: string, full_name: string, description: string, language: string, html_url: string, license: string, ownerId: number, created_at: Date, updated_at: Date) {
        super();

        this.project_id = project_id;
        this.private = private_;
        this.archived = archived;
        this.name = name;
        this.full_name = full_name;
        this.description = description;
        this.language = language;
        this.html_url = html_url;
        this.license = license;
        this.ownerId = ownerId;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }

    public static async findAll(): Promise<Project[]> {
        const rows = await super.all('SELECT * FROM projects');
        return rows.map((row) => new Project(
            row.project_id,
            row.private,
            row.archived,
            row.name,
            row.full_name,
            row.description,
            row.language,
            row.html_url,
            row.license,
            row.owner_id,
            row.created_at,
            row.updated_at
        ));
    }

    public static async getById(project_id: number): Promise<Project> {
        const row = await super.get('SELECT * FROM projects WHERE project_id = ?', [project_id]);
        return new Project(
            row.project_id,
            row.private,
            row.archived,
            row.name,
            row.full_name,
            row.description,
            row.language,
            row.html_url,
            row.license,
            row.owner_id,
            row.created_at,
            row.updated_at
        );
    }

    public async getOwner(): Promise<Owner> {
        return await Owner.getById(this.ownerId);
    }

    public static async getProjectsByOwner(ownerId: number): Promise<Project[]> {
        const rows = await super.all('SELECT * FROM projects WHERE owner_id = ?', [ownerId]);
        return rows.map((row) => new Project(
            row.project_id,
            row.private,
            row.archived,
            row.name,
            row.full_name,
            row.description,
            row.language,
            row.html_url,
            row.license,
            row.owner_id,
            row.created_at,
            row.updated_at
        ));
    }
}

export default Project;