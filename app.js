console.log("Rodando o sistema de gerenciamento de jogos")

/* DIA 1*/
let numeroUm = 1
let stringUm = '1'
let numeroTrinta = 30
let stringTrinta = '30'
let numeroDez = 10
let stringDez = '10'

if(numeroUm == stringUm) {
    console.log('as variaveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes')
} else {
    console.log('as variaveis numeroUm e stringUm não tem o mesmo valor')
}

if(numeroTrinta === stringTrinta) {
    console.log('As variáveis numeroTrinta e stringTrinta tem o mesmo valor e mesmo tipo')
} else {
    console.log('As variáveis numeroTrinta e stringTrinta não tem o mesmo tipo')
}

if(numeroDez == stringDez) {
    console.log('As variáveis numeroDez e stringDez tem o mesmo valor, mas tipos diferentes')
} else {
    console.log('As variáveis numeroDez e stringDez não tem o mesmo valor')
}


/* DIA 2*/

const nome = prompt("Qual seu nome?");
const idade = prompt("Olá " + nome  + ", qual a sua idade:");
const linguagem = prompt(nome + " Qual linguagem de programação você está estudando?");
alert("Olá " + nome +  ", você tem " + idade + " anos e já está aprendendo " + linguagem);

/*DESAFIO*/
const gostaSim = 1;
const gostaNão = 2;
const gostaEstudar = prompt("Você gosta de estudar " + linguagem + "? Responda com o número 1 para SIM ou 2 para NÃO.")

if(gostaSim == 1) {
    alert("Muito bom! Continue estudando e você terá muito sucesso.")
} else {
    alert("Ahh que pena... Já tentou aprender outras linguagens?")
}

/*
Exemplo:

const cidade = prompt("Digite a sua cidade:");
const msg = `Você é de ${cidade}!`;
alert(msg);

- Qual o seu nome?
- Quantos anos você tem?
- Qual linguagem de programação você está estudando? 

"Olá [nome], você tem [idade] anos e já está aprendendo [linguagem]!"

Você gosta de estudar [linguagem]? Responda com o número 1 para SIM ou 2 para NÃO.

E aí, dependendo da resposta, ele deve mostrar uma das seguintes mensagens:

1 > Muito bom! Continue estudando e você terá muito sucesso.
2 > Ahh que pena... Já tentou aprender outras linguagens?

*/