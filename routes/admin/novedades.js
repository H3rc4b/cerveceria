var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('admin/novedades', {
    layout: 'admin/layout',
    usuario: req.sesion.nombre
  });
});
module.exports = router; 