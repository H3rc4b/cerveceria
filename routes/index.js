var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index');
});
router.post('/', async (req, res, next) => {
  var nombre = req.body.nombre;
  var apellido = req.body.apellido;
  var email = req.body.email;
  var tel = req.body.tel;
  var mensaje = req.body.comentarios;
  console.log(req.body);

  var obj = {
    to: 'hernan_1587@hotmail.com',
    subject: 'comentacto desde la web',
    html: nombre + " " + apellido + " se contacto atraves y quiere mas info a este correo: " + email + ", <br> Ademas, hizo el siguiente comentario: " + telefono
  }//cierra var obj
  var transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "df147c916b10df",
      pass: "e4f154bfe21119"
    }
  });// cierra transporter
   var info = await transport.sendMail(obj);

   res.render('index', {
     message: 'mensaje enviado correctamente',
   })

})// cierra peticion del post

module.exports = router;