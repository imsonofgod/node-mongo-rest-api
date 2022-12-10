const express = require('express');
const personaController = require('../controllers/personaController');

const router = express.Router();

router.get('/obtenerPersonas',personaController.obtenerPersonas);
router.post('/crearPersona',personaController.crearPersona);
 


module.exports = router;