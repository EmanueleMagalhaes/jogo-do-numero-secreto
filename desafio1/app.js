let titulo = document.querySelector('h1');
titulo.innerHTML = 'hora do desafio';

function exibirMensagemNoConsole() {
    console.log('o botão foi clicado')
}

function exibirAlerta(){
    alert('eu amo JS');
}

function exibirPrompt(){
    let cidade = prompt('digite o nome de uma cidade do brasil');
    alert(`estive em ${cidade} e lembrei de você`)
}

function exibirSoma() {
    let numero1 = parseInt(prompt('digite o primeiro número'));
    let numero2 = parseInt(prompt('digite o segundo número'));
    let resultado = numero1 + numero2;
    alert (`${numero1} + ${numero2} = ${resultado}`)
}