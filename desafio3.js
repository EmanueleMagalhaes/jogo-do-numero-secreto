//function calculaIMG(altura, peso){  //IMC = índice de massa corporal
//
  //  let imc = peso / (alturaMetros * alturaMetros);
//}

/*function calcularFatorial(numero) {
    if (numero === 0 ||numero === 1) {
        return 1;
    }

    let fatorial = 1;
    for (let i = 2; i <= numero; i++) {
        fatorial *= i;
    }

    return fatorial;
}

let numero = 5;
let resultado = calcularFatorial(numero);
console.log(`o fatorial de ${numero} é ${resultado}`);*/

/*function converterDolarParaReal(valorEmDolar) {
    let cotacaoDolar = 4.80;
    let valorEmReais = valorEmDolar * cotacaoDolar;
    return valorEmReais.toFixed(2);
}

let valorEmDolar = 50;
let valorEmReais = converterDolarParaReal(valorEmDolar);
console.log(`${valorEmDolar} dólares equivalem a R$ ${valorEmReais}`);*/

/*function calcularAreaPerimetroSalaRetangular(altura, largura) {
    let area = altura * largura;
    let perimetro = 2 * (altura + largura);

    console.log(`área da sala: ${area} metros quadrados`);
    console.log(`perímetro da sala: ${perímetro} metros`);
}

let altura = 3;
let largura= 5;
calcularAreaPerimetroSalaRetangular(altura, largura);*/

/*function calcularAreaPerimetroSalaCircular(raio) {
    let area = Math.PI * raio * raio;
    let perimetro = 2 * Math.PI * raio;

    console.log(`área da sala circular: ${area.toFixed(2)} metros quadrados`);
    console.log(`perímetro da sala circular: ${area.toFixed(2)} metros`);
}

let raio = 4;
calcularAreaPerimetroSalaCircular(raio);*/

function mostrarTabuada(numero) {
    for (let i = 1; i <= 10; i++) {
        let resultado = numero * i;
        console.log(`${numero} x ${i} = ${resultado}`);
    }
}

let numero = 7;
mostrarTabuada(numero);