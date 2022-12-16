// sessão

// Irá fazer a parte de Login funcionar.
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

function limparSessao() {
    // Limpar o cache do Cadastro do Usuário 
    sessionStorage.clear();
    // finalizarAguardar();
    window.location = "../login.html";
}





// Aqui estou fazendo o timer funcionar, Utilizei uma função copiada na internet para fazer o que eu quero

// Pegando o data final e transformando em um tipo data
var endDate = new Date("March 09, 2023 11:13:00").getTime();

// Colocando pra essa função rodar a cada 1s ou seja 1000 ms, isso faára com que o timer se atualize a cada segundo
var timer = setInterval(function() {

    // Pegando a data atual que está na maquina do Usuário
    let now = new Date().getTime();

    // Criando uma variável para pegar a diferença entre a data final e a atual para saber quanto tempo falta
    let t = endDate - now;

    console.log(endDate)
    // Se o tempo ainda não for o atual ...
    if (t >= 0) {
        
        // Fazendo a conta pro tempo em milisegundos se transformar em Dias / multiplica para ficar em minuto depois horas depois dias
        let days = Math.floor(t / (1000 * 60 * 60 * 24));

        // Pegando a sobra da divisão de dias por horas
        let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

        // Pegando o resto da divisao entre horas e minutos
        let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));

        // Pegando o resto da divisão entre Minutos e segundos
        let secs = Math.floor((t % (1000 * 60)) / 1000);
    
        document.getElementById("timer-days").innerHTML = `${days}: `;
    

        // Slice ele pega o intervalo de valores dentro de um array ou string, como ele é negativo está começando pelo final. Ou seja o slice de -2 está pegando apenas os ultimos 2 valores
        // de cade String
        document.getElementById("timer-hours").innerHTML = `${("0"+hours).slice(-2)}: `;
    
        document.getElementById("timer-mins").innerHTML = `${("0"+mins).slice(-2)}: `;
    
        document.getElementById("timer-secs").innerHTML = `${("0"+secs).slice(-2)}`;

        console.log(days + hours + mins + secs)
    
    }else {

        // Surpresa do final do Timer

        document.getElementById('home').style.opacity = 0;
        document.getElementById('home').style.transition = 'all ease-in-out 3s'

        setTimeout(() =>{

            window.location = 'qrcode.html'

        }, 3000)

    }
    
}, 1000);



