
// login
function isInputNull(){

    const username = document.getElementById('inp_user').value;
    const password = document.getElementById('inp_senha').value;

    return username == '' || password == '';

}


function login(){

   
    if(isInputNull()){

        erro.innerHTML = 'All fields are mandatory';

    }else{
        // Pegando aqui o select do Username e da senha..
    const username = document.getElementById('inp_user').value;
    const password = document.getElementById('inp_senha').value;
    fetch("/usuarios/autenticar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            usernameServer: username,
            senhaServer: password,
        })
    }).then(function (resposta) {
        
        if (resposta.ok) {
            console.log(resposta);
            resposta.json().then(json => {
                console.log(json);
                console.log(JSON.stringify(json));
                
                sessionStorage.USERNAME_USUARIO = json.username;
                sessionStorage.ID_USUARIO = json.idUsuario;
                sessionStorage.EMAIL_USUARIO = json.email;

                // Coloquei isso pra na hora que der a animação conseguir pegar o nome do usuário que foi guardado no SessionStorage
                b_usuario.innerHTML = `${sessionStorage.USERNAME_USUARIO}`                    
                
            });

            // Animação da barra de loading
            barra_loading.style.display = 'block';
            barra_loading.style.width = barra + '%';
            barra_loading.style.transition = 'width ease-in-out 2.5s';

            // Animação do Wellcome com o nome do Usuário
            setTimeout(() => {
                wellcome.style.display = 'grid'
            }, 2600)

            setTimeout(() => {
                wellcome.style.opacity = 0;
                wellcome.style.transition = 'opacity ease-in-out 3s';
            }, 2630)
        
            setTimeout(() => {
                window.location = "home.html";
            }, "5000")
            
        } else {

            console.log("Houve um erro ao tentar realizar o login!");
            resposta.text().then(texto => {
                console.error(texto);
                erro.innerHTML = `Invalid email/password`;

                // Aqui estou apagando a mensagem pra não ficar o tempo todo na tela
                setTimeout(() => {
                    erro.innerHTML = '';
                }, 4000)
            });
        }

    }).catch(function (erro) {
        console.log(erro);
    })

    return false;
        }
 }


function validarSessao() {
    // aguardar();

    var email = sessionStorage.EMAIL_USUARIO;
    var username = sessionStorage.USERNAME_USUARIO;

    var b_usuario = document.getElementById("b_usuario");

    // Vendo se tem algum valor no email e username

    if (email != null && username != null) {
        // window.alert(`Seja bem-vindo, ${nome}!`);
        b_usuario.innerHTML = username;

        // finalizarAguardar();
    } else {
        window.location = "../login.html";
    }
}


// Autentificação Cadastro:

function containsSpecialChar(string) {
    return /[^a-zA-Z0-9]/.test(string);
  }
  
function containsNumber(string) {
    return /\d/.test(string);
  }

function isValidEmail(email) {
    var regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return regex.test(email);
  }

function autSignUp(){

    const name = document.getElementById('inp_nome').value;
    const username = document.getElementById('inp_user').value;
    const email = document.getElementById('inp_senha').value;
    const password = document.getElementById('inp_senha').value;
    const passwordConf = document.getElementById('inp_senhaConf').value;
    var mensagem = document.getElementById('erro')

    if(name == '' || username == '' || email == ''
     || password == '' || passwordConf == ''){
        mensagem.innerHTML = "All fields are mandatory"
        return false
     }
    else if(containsSpecialChar(name) || containsNumber(name)){
        mensagem.innerHTML = "Name canno't have numbes or special charecters"
        return false
    }else if(containsSpecialChar(username)){
        mensagem.innerHTML = "Username canno't have special charecters"
        return false
    }else if(isValidEmail(email)){
        mensagem.innerHTML = "E-mail does not match"
        return false
    }else if(password != passwordConf){
        mensagem.innerHTML = "Passwords does not match"
        return false;
    }else{
        return true;
    }
}


function signOk(){
    
    var barra = 100;
    setTimeout(() => {
      document.getElementById('barra_loading').style.display = "block";
      document.getElementById('barra_loading').style.width = barra + "%";
      document.getElementById('barra_loading').style.transition = "width ease-in-out 2.5s";
    }, 1);

    setTimeout(() => {
      window.location = "paises.html";
    }, "3000");

}


function cadastrar (){
        

    var nomeVar = inp_nome.value;
    var usernameVar = inp_user.value;
    var emailVar = inp_email.value;
    var senhaVar = inp_senha.value;
    var erro = document.getElementById('erro')

    if(autSignUp()){

        fetch("/usuarios/cadastrar", {
            method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            
            nomeServer: nomeVar,
            emailServer: emailVar,
            senhaServer: senhaVar,
            usernameServer: usernameVar,
        })
    }).then(function (resposta) {

        resposta.ok?signOk():erro.innerHTML = "Sign up fail! Try again later";

    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    });

    setTimeout(() => {

            erro.innerHTML = '';
        }, 6000)
    
    return false;

}
}


function limparSessao() {
    // Limpar o cache do Cadastro do Usuário 
    sessionStorage.clear();
    // finalizarAguardar();
    window.location = "../login.html";
}

