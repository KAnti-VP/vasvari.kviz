const express = require('express');
const cors = require('cors');
const path = require('path');
const statisticsRoutes = require('./routes/statistics');

const app = express();
// A felhőszolgáltatók (pl. Render) saját portot adnak a process.env.PORT változóban
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// 1. A frontend statikus fájljainak (HTML, CSS, JS, képek) kiszolgálása
app.use(express.static(path.join(__dirname, '../frontend')));

// 2. API útvonalak (statisztika lekérdezése és mentése)
app.use('/api', statisticsRoutes);

// 3. Ha valaki közvetlenül a főoldalt nyitja meg, az index.html-t kapja meg
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

app.listen(PORT, () => {
    console.log(`A teljes alkalmazás fut a következő címen: http://localhost:${PORT}`);
});