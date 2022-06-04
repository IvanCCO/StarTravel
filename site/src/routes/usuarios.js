var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.get("/", function (req, res) {
    usuarioController.testar(req, res);
});

router.get("/listar", function (req, res) {
    usuarioController.listar(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.entrar(req, res);
});

router.post("/alterar", function (req, res) {
    usuarioController.updateconfig(req, res);
});

router.post("/colocarPais", function (req, res) {
    usuarioController.sel(req, res);
});

router.get("/pais", function(req, res){
    usuarioController.pais(req, res);
})

router.post("/updatePassword", function(req, res){
    usuarioController.updatePassword(req, res);
})



module.exports = router;