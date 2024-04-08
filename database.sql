PRAGMA foreign_keys=OFF;
BEGIN TRANSACTION;
CREATE TABLE owners (owner_id INTEGER PRIMARY KEY AUTOINCREMENT, login VARCHAR(50), html_url TEXT, type TEXT, created_at DATETIME, updated_at DATETIME, avatar_url TEXT);
CREATE TABLE projects (project_id INTEGER PRIMARY KEY AUTOINCREMENT, owner_id INTEGER, private BOOLEAN, archived BOOLEAN, name TEXT, full_name TEXT, description TEXT, language TEXT, html_url TEXT, licence TEXT, created_at DATETIME, updated_at DATETIME, FOREIGN KEY(owner_id) REFERENCES owners(owner_id));
DELETE FROM sqlite_sequence;
COMMIT;
