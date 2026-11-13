const express = require('express');
const router = express.Router();
const statisticsController = require('../controllers/statisticsController');

router.get('/statistics', statisticsController.getStatistics);
router.post('/results', statisticsController.recordResult);

module.exports = router;
