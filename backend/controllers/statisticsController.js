const db = require('../data/database');

// Engedélyezett karakterkódok biztonsági ellenőrzéshez
const VALID_CODES = ['P', 'Ö', 'K', 'SZ', 'V'];

// Összesített statisztikák lekérdezése (GET)
exports.getStatistics = (req, res) => {
    const sql = 'SELECT code, name, count FROM character_stats ORDER BY count DESC';
    
    db.all(sql, [], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: 'Adatbázis hiba a lekérdezés során.' });
        }
        res.json(rows);
    });
};

// Új eredmény rögzítése (POST)
exports.recordResult = (req, res) => {
    const { winners } = req.body;

    // Ellenőrizzük, hogy tömböt kaptunk-e és nem üres
    if (!Array.isArray(winners) || winners.length === 0) {
        return res.status(400).json({ error: 'Érvénytelen eredmény formátum.' });
    }

    // Csak érvényes karakterkódokat fogadunk el
    const filteredWinners = winners.filter(code => VALID_CODES.includes(code));

    if (filteredWinners.length === 0) {
        return res.status(400).json({ error: 'Ismeretlen karakterkód.' });
    }

    // Minden nyertes karakter számlálóját megnöveljük 1-gyel
    db.serialize(() => {
        const stmt = db.prepare('UPDATE character_stats SET count = count + 1 WHERE code = ?');
        
        filteredWinners.forEach(code => {
            stmt.run(code);
        });

        stmt.finalize((err) => {
            if (err) {
                return res.status(500).json({ error: 'Hiba az eredmény mentésekor.' });
            }
            res.status(200).json({ message: 'Eredmény sikeresen rögzítve!' });
        });
    });
};
