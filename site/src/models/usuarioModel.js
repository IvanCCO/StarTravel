var database = require("../database/config")

function listar() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
    SELECT Post.mensagem, Post.imagem, Usuario.username, idPost, idUsuario FROM Post, Usuario WHERE fkUsuario = idUsuario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function entrar(username, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", username, senha)
    var instrucao = `
        SELECT * FROM Usuario WHERE username = '${username}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrar(nome, email, senha, username) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha, username);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO Usuario (nome, email, senha, username, paisOne, paisTwo, paisThree) VALUES ('${nome}', '${email}', '${senha}', '${username}', null, null, null);
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
// Essa função está sendo executada na Settings para trocar o usuario, senha e etc.


function updateconfig(username, idUsuario){
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function updateconfig():", username, idUsuario);

    var instrucao = `
    UPDATE Usuario set username = '${username}' WHERE idUsuario = ${idUsuario};  
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}



function sel(paisOne, paisTwo, paisThree, idUsuario){

    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function sel():", paisOne, paisTwo, paisThree, idUsuario);
    
    var instrucao = `
   
    UPDATE Usuario set paisOne = '${paisOne}', paisTwo = '${paisTwo}', paisThree = '${paisThree}'  WHERE idUsuario = ${idUsuario};  

    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


function pais(){

    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function sel():","" );
    
    var instrucao = `
   
    SELECT nomePais, qntVotos, totalAvaliacao, ROUND(totalAvaliacao/qntVotos, 1) as Media FROM Pais ORDER BY Media DESC;

    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function updatePassword(username, senha){

    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function sel():","" );
    
    var instrucao = `
   
    UPDATE Usuario SET senha = '${senha}' WHERE username = '${username}';

    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function votar(nomePais, qntVotos, totalAvaliacao){

    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function sel():","" );
    
    var instrucao = `
   
    UPDATE Pais SET qntVotos = '${qntVotos}', totalAvaliacao = '${totalAvaliacao}' where nomePais = '${nomePais}';

    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function publicar(idUsuario, titulo, imagem){

    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function publicar():","" );
    
    var instrucao = `
   
    INSERT INTO Post VALUES (${idUsuario}, null, '${titulo}', '${imagem}');

    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}




module.exports = {
    entrar,
    cadastrar,
    listar,
    updateconfig,
    sel,
    pais,
    updatePassword,
    votar,
    publicar
};