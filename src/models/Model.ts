import sqlite3 from 'sqlite3';

const databasePath:string = 'database.db';

class Model {
  private static dbInstance: sqlite3.Database;

  constructor() { }

  private static getDbInstance() {
    if (this.dbInstance) {
        return this.dbInstance;
    }

    this.dbInstance = new sqlite3.Database(databasePath, (err) => {
      if (err) {
        console.error('Erreur lors de l\'ouverture de la base de données SQLite:', err.message);
      } else {
        console.log('Base de données SQLite connectée avec succès.');
      }
    });
    return this.dbInstance;
  }

  protected static get(sql: string, params: any[] = []): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.getDbInstance().get(sql, params, (err, row) => {
        if (err) {
          console.error('Erreur lors de l\'exécution de la requête SQL:', err.message);
          reject(err);
        } else {
          resolve(row);
        }
      });
    });
  }

  protected static all(sql: string, params: any[] = []): Promise<any[]> {
    return new Promise<any[]>((resolve, reject) => {
      this.getDbInstance().all(sql, params, (err, rows) => {
        if (err) {
          console.error('Erreur lors de l\'exécution de la requête SQL:', err.message);
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  }
}

export default Model;