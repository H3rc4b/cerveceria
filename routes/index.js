var express = require('express');
var router = express.Router();
var nodemailer= require('nodemailer');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.post('/', async (req, res, next) => {
  var nombre = req.body.nombre;
  var apellido = req.body.apellido;
  var email = req.body.email;
  var tel = req.body.tel;
  var mensaje = req.body.comentarios;
  console.log(req.body);
})

module.exports = router;
