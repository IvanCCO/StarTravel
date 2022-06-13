var usuarioModel = require("../models/usuarioModel");

var sessoes = [];

function testar(req, res) {
  console.log("ENTRAMOS NA usuarioController");
  res.json("ESTAMOS FUNCIONANDO!");
}

function atualizar(req, res) {
  usuarioModel.atualizar()
    .then(function (resultado) {
      if (resultado.length > 0) {
        res.status(200).json(resultado);
      } else {
        res.status(204).send("Nenhum resultado encontrado!");
      }
    })
    .catch(function (erro) {
      console.log(erro);
      console.log(
        "Houve um erro ao realizar a consulta! Erro: ",
        erro.sqlMessage
      );
      res.status(500).json(erro.sqlMessage);
    });
}

function entrar(req, res) {
  var username = req.body.usernameServer;
  var senha = req.body.senhaServer;

  if (username == undefined) {
    res.status(400).send("Seu usuário está undefined!");
  } else if (senha == undefined) {
    res.status(400).send("Sua senha está indefinida!");
  } else {
    usuarioModel
      .entrar(username, senha)
      .then(function (resultado) {
        console.log(`\nResultados encontrados: ${resultado.length}`);
        console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

        if (resultado.length == 1) {
          console.log(resultado);
          res.json(resultado[0]);
        } else if (resultado.length == 0) {
          res.status(403).send("Username e/ou senha inválido(s)");
        } else {
          res.status(403).send("Mais de um usuário com o mesmo login e senha!");
        }
      })
      .catch(function (erro) {
        console.log(erro);
        console.log(
          "\nHouve um erro ao realizar o login! Erro: ",
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      });
  }
}

function cadastrar(req, res) {
  // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
  var nome = req.body.nomeServer;
  var username = req.body.usernameServer;
  var email = req.body.emailServer;
  var senha = req.body.senhaServer;

  // Faça as validações dos valores
  if (nome == undefined) {
    res.status(400).send("Seu nome está undefined!");
  } else if (email == undefined) {
    res.status(400).send("Seu email está undefined!");
  } else if (senha == undefined) {
    res.status(400).send("Sua senha está undefined!");
  } else if (username == undefined) {
    res.status(400).send("Seu username está undefined!");
  } else {
    // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
    usuarioModel
      .cadastrar(nome, email, senha, username)
      .then(function (resultado) {
        res.json(resultado);
      })
      .catch(function (erro) {
        console.log(erro);
        console.log(
          "\nHouve um erro ao realizar o cadastro! Erro: ",
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      });
  }
}


function sel(req, res) {
  var paisOneVar = req.body.paisOneServer;
  var paisTwoVar = req.body.paisTwoServer;
  var paisThreeVar = req.body.paisThreeServer;
  var idUsuario = req.body.idUsuario;

  console.log(paisOneVar);
  console.log(paisTwoVar);
  console.log(paisThreeVar);
  console.log(idUsuario);

  if (
    paisOneVar == undefined ||
    paisTwoVar == undefined ||
    paisThreeVar == undefined
  ) {
    res.status(400).send("Seu erro ao cadastrar paises!");
  } else {
    // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
    usuarioModel
      .sel(paisOneVar, paisTwoVar, paisThreeVar, idUsuario)
      .then(function (resultado) {
        res.json(resultado);
      })
      .catch(function (erro) {
        console.log(erro);
        console.log(
          "\nHouve um erro ao realizar a alteração! Erro: ",
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      });
  }
}

function pais(req, res) {
  usuarioModel
    .pais()
    .then(function (resultado) {
      if (resultado.length > 0) {
        res.status(200).json(resultado);
      } else {
        res.status(204).send("Nenhum resultado encontrado!");
      }
    })
    .catch(function (erro) {
      console.log(erro);
      console.log(
        "Houve um erro ao realizar a consulta! Erro: ",
        erro.sqlMessage
      );
      res.status(500).json(erro.sqlMessage);
    });
}

function updateconfig(req, res) {
  // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
  var username = req.body.usernameServer;
  var idUsuario = req.body.idUsuarioServer;

  // Faça as validações dos valores
  if (username == undefined) {
    res.status(400).send("Seu username está undefined!");
  } else if (idUsuario == undefined) {
    res.status(400).send("Seu ID está undefined!");
  } else {
    // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
    usuarioModel
      .updateconfig(username, idUsuario)
      .then(function (resultado) {
        res.json(resultado);
      })
      .catch(function (erro) {
        console.log(erro);
        console.log(
          "\nHouve um erro ao realizar a alteração! Erro: ",
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      });
  }
}

function updatePassword(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var username = req.body.usernameServer;
    var senha = req.body.senhaServer;
  
    // Faça as validações dos valores
    if (username == undefined) {
      res.status(400).send("Seu username está undefined!");
    } else if (senha == undefined) {
      res.status(400).send("Seu ID está undefined!");
    } else {
      // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
      usuarioModel
        .updatePassword(username, senha)
        .then(function (resultado) {
          res.json(resultado);
        })
        .catch(function (erro) {
          console.log(erro);
          console.log(
            "\nHouve um erro ao realizar a alteração! Erro: ",
            erro.sqlMessage
          );
          res.status(500).json(erro.sqlMessage);
        });
    }
  }

  function publicar(req, res) {
    var idUsuario = req.params.idUsuario;
    var titulo = req.body.titulo;
    var imagem = req.body.imagem;

    if (titulo == undefined) {
        res.status(400).send("O título está indefinido!");
    } else if (imagem == undefined) {
        res.status(400).send("A descrição está indefinido!");
    } else if (idUsuario == undefined) {
        res.status(403).send("O id do usuário está indefinido!");
    } else {
        usuarioModel.publicar(idUsuario, titulo, imagem)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            )
            .catch(
                function (erro) {
                    console.log(erro);
                    console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function votar(req, res) {
  // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
  var nomePais = req.body.nomePaisServer;
  var qntVotos = req.body.qntVotosServer;
  var valorVoto = req.body.valorVotoServer;

  // Faça as validações dos valores
  if (nomePais == undefined) {
    res.status(400).send("Seu nomePais está undefined!");
  } else if (valorVoto == undefined) {
    res.status(400).send("Seu valorVoto está undefined!");
  } else if (qntVotos == undefined) {
    res.status(400).send("Seu valorVoto está undefined!");
  }else {
    
    // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
    usuarioModel
      .votar(nomePais, qntVotos, valorVoto)
      .then(function (resultado) {
        res.json(resultado);
      })
      .catch(function (erro) {
        console.log(erro);
        console.log(
          "\nHouve um erro ao realizar a alteração! Erro: ",
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      });
  }
}
  

module.exports = {
  entrar,
  cadastrar,
  atualizar,
  testar,
  updateconfig,
  sel,
  pais,
  updatePassword,
  publicar,
  votar
};
