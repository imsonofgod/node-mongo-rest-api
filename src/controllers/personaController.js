const persona = require("../models/persona");

module.exports.crearPersona = function(req, res){
   if(!req.body.dni) return res.status(200).send({ success: false, error: 'user info not found' });

   try {
      persona.create(req.body).then(() => {
          res.status(200).send({ success: true, error: 'user created successfully' });
      }).catch(error => res.status(200).send({ success: true, error: error.message }));
      
   } catch (error) {
      res.status(500).send({ success: false, error: error.message})
   }
}

module.exports.obtenerPersonas = function(req, res){
   try {
      persona.find({}).then((data) => {
          res.status(200).send({ success: true, data: data });
      }).catch(error => res.status(200).send({ success: true, error: error.message }));
      
   } catch (error) {
      res.status(500).send({ success: false, error: error.message})
   }
}