let titulo = document.querySelector ('h1');
titulo.innerHTML = 'Hora do Desafio da Manu';

let texto = document.querySelector ('p');
texto.innerHTML = 'Vamos treinar';

function exibirMensagemNoConsole() {
    console.log('O botão foi clicado!')
}

function euAmoJs() {
    console.log('Eu amo JS')
}

function qualCidade() {
    let cidade = prompt('Digite uma cidade que vc gosta')
    alert(`Estive em ${cidade} e lembrei de você`)
}

function somaNumero() {
    let numero1 = parseInt(prompt('digite um numero'));
    let numero2 = parseInt(prompt('Digite outro numero'));
    let resultado = numero1 + numero2;
    alert(`a soma dos valores indicados é ${resultado}`)
}