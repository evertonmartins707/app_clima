// Importações | Imports
const express = require('express');
const router = express.Router();
const requireApi = require('../controllers/apiController.js');

// Rotas | Routers
router.get('/', requireApi.requestApiWoeid);
router.get('/:id', requireApi.requestApiCity);

// -----------------------
module.exports = router;
