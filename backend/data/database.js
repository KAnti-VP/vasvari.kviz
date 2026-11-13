const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Az adatbázis fájl helye a backend mappán belül
const dbPath = path.resolve(__dirname, 'database.sqlite');
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Hiba az SQLite adatbázis megnyitásakor:', err.message);
    } else {
        console.log('Sikeres csatlakozás az SQLite adatbázishoz.');
    }
});

// Tábla létrehozása és kezdőértékek beállítása
db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS character_stats (
            code TEXT PRIMARY KEY,
            name TEXT NOT NULL,
            count INTEGER DEFAULT 0
        )
    `);

    const initialCharacters = [
        { code: 'P', name: 'A problémamegoldó' },
        { code: 'Ö', name: 'Az ötletgyáros' },
        { code: 'K', name: 'A kódoló' },
        { code: 'SZ', name: 'A szervező' },
        { code: 'V', name: 'A jövő vállalkozója' }
    ];

    const stmt = db.prepare(`
        INSERT OR IGNORE INTO character_stats (code, name, count) 
        VALUES (?, ?, 0)
    `);

    initialCharacters.forEach((char) => {
        stmt.run(char.code, char.name);
    });

    stmt.finalize();
});

module.exports = db;
