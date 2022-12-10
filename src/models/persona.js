const mongoose = require('mongoose');

const PersonaScheema = mongoose.Schema({
    dni:{
        type: String,
        unique: true
    },
    name:{
        type: String,
    },
    lastName:{
        type: String,
    },
    email:{
        type: String,
    },
    direccion:{
        type: String,
    }
});

const persona = mongoose.model('persona', PersonaScheema, 'personas');

module.exports = persona;