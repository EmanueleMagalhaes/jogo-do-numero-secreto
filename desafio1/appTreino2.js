let desafio = document.querySelector ('h1');
desafio.innerHTML = 'desafio do lucas';

let treino = document.querySelector ('p');
treino.innerHTML = 'vamos treinar';

function exibirConsole() {
    console.log('o botão foi clicado');
}

function exibirAlerta() {
    alert('eu me chamo lucas');
}

function exibirPrompt() {
    let pergunta = prompt('insira um nome de uma comida brasileira');
    alert(`eu gosto de ${pergunta}, mas prefiro churrasco`);
}

function exibirSoma() {
    let numero1 = parseInt(prompt('insira o primeiro número'));
    let numero2 = parseInt(prompt('insira o segundo número'));

    let soma = (numero1 + numero2);
    alert(`o resultado é ${soma}`);
}