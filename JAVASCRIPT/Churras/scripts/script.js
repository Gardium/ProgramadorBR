// Carne - 400 gr por Adulto   + de 6 horas - 650
// Cerveja - 1200 ml por Adulto + 6 horas - 2000 ml
// Refrigerante/agua - 1000 ml por Adulto + 6 horas 1500ml

// Crianças valem por 0,5

let adultos = document.getElementsByTagName("input")[0];
let criancas = document.getElementsByTagName("input")[1];
let duracao = document.getElementsByTagName("input")[2];

let resultado = document.getElementById("resultado");

let horasDeChurrasco;

let qtdeCarne;
let qtdeCerveja;

let qtdeBebidas;

function calcular() {
  if (adultos.value + criancas.value + duracao.value < 0) {
    return (resultado.innerHTML = "Valor inserido inválido");
  }
  horasDeChurrasco = duracao.value;

  qtdeCarne =
    adultos.value * carnePP(horasDeChurrasco) +
    criancas.value * (carnePP(horasDeChurrasco) / 2);

  qtdeCerveja = cervejaPP(horasDeChurrasco) * adultos.value;

  qtdeBebidas =
    adultos.value * bebidasPP(horasDeChurrasco) +
    criancas.value * (bebidasPP(horasDeChurrasco) / 2);

  resultado.innerHTML = `<p> <img src="./assets/meat.png"></img>  ${converterQuantidade(
    qtdeCarne,
    1000,
    false
  )}   kg de carne</p>`;
  resultado.innerHTML += `<p> <img src="./assets/beer.png"></img>  ${converterQuantidade(
    qtdeCerveja,
    355,
    true
  )}   latas de cerveja</p>`;

  resultado.innerHTML += `<p> <img src="./assets/drink.png"></img>  ${converterQuantidade(
    qtdeBebidas,
    2000,
    true
  )}   Garrafas de 2L de bebidas</p>`;
}

function carnePP(horasDeChurrasco) {
  return horasDeChurrasco >= 6 ? 650 : 400;
}
function cervejaPP(horasDeChurrasco) {
  return horasDeChurrasco >= 6 ? 2000 : 1200;
}
function bebidasPP(horasDeChurrasco) {
  return horasDeChurrasco > 6 ? 1500 : 1000;
}

function converterQuantidade(elemento, conversao, arredondamento) {
  return arredondamento
    ? Math.ceil(elemento / conversao)
    : elemento / conversao;
}
