"use strict";

// function imprimir() {
//   var x = 7;
//   console.log(x);
// }

// imprimir();
// console.log(window.x);

// THIS AND BIND

// let speakGeneric = function () {
//   console.log(this.sound);
// };

// let dog = {
//   sound: "Au Au ",
//   speak: speakGeneric,
// };
// let cat = {
//   sound: "Miau ",
//   speak: speakGeneric,
// };

// dog.speak();
// cat.speak();
// let bindedFunction = speakGeneric.bind(cat);

// bindedFunction();

// ARROW FUNCTIONS
// let dobro = () => console.log(this);

// let dobro = function () {
//   console.log(this);
// };

// let numero = {
//   x: 8,
//   d: dobro,
// };
// console.log(numero.d());

// function ola() {
//   console.log("Olá");
// }
// function tchau() {
//   console.log("Tchau");
// }

// function saudacao(s, nome) {
//   s() + console.log(nome);
// }

// saudacao(tchau, "Edgard");

// CALLBACK

// let usuarios = ["Ed", "Naru", "Lisa", "Thai", "Bia", "Beca"];

// function inserirUsuario(nome, callback) {
//   setTimeout(() => {
//     usuarios.push(nome);
//     callback();
//   }, 1000);
// }

// function listarUsuarios() {
//   console.log(usuarios);
// }

// inserirUsuario("Kuroi", listarUsuarios);

// PROMISSES

// let usuarios = ["Ed", "Naru", "Lisa", "Thai", "Bia", "Beca"];

// function inserirUsuario(nome) {
//   let promise = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       usuarios.push(nome);
//       let error = true;
//       if (!error) {
//         resolve();
//       } else {
//         reject({ msg: "ERRO QUALQUER" });
//       }
//     }, 1000);
//   });

//   return promise;
// }

// function listarUsuarios() {
//   console.log(usuarios);
// }

// inserirUsuario("Kuroi")
//   .then(listarUsuarios)
//   .catch((error) => {
//     console.log(error);
//   });

// ASYNC AWAIT

// let usuarios = ["Ed", "Naru", "Lisa", "Thai", "Bia", "Beca"];

// function inserirUsuario(nome) {
//   let promise = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       usuarios.push(nome);
//       let error = false;
//       if (!error) {
//         resolve();
//       } else {
//         reject({ msg: "ERRO QUALQUER" });
//       }
//     }, 1000);
//   });

//   return promise;
// }

// function listarUsuarios() {
//   console.log(usuarios);
// }

// async function executar() {
//   await inserirUsuario("Igor");
//   listarUsuarios();
// }

// executar();

// // FILTER

// function novoAluno(nome, idade) {
//   return { nome, idade };
// }

// let alunos = [
//   novoAluno("Edgard", 24),
//   novoAluno("Nayara", 22),
//   novoAluno("Sanio", 26),
//   novoAluno("Yuzo", 28),
// ];

// for (let aluno of alunos) {
//   if (aluno.idade < 25) {
//     console.log(aluno.nome);
//   }
// }

// function menosDe25(aluno) {
//   return aluno.idade < 25;
// }
// function maisDe25(aluno) {
//   return aluno.idade > 25;
// }

// function filtro(callback) {
//   let filtrados = [];
//   for (let i of this) {
//     if (callback(i)) {
//       filtrados.push(i);
//     }
//   }

//   return filtrados;
// }

// alunos.filtro = filtro;

// let alunosMaisNovos = alunos.filter(menosDe25);

// console.log(alunosMaisNovos);

// MAP

// function novoAluno(nome, idade) {
//   return { nome, idade };
// }

// let alunos = [
//   novoAluno("Edgard", 24),
//   novoAluno("Nayara", 22),
//   novoAluno("Sanio", 26),
//   novoAluno("Yuzo", 28),
// ];

// function alunoFuturo(aluno) {
//   return { name: aluno.nome, age: aluno.idade + 5 };
// }

// console.log(alunos.map(alunoFuturo));

// SPREAD OPERATOR

// var pessoa = {
//   nome: "José Silva",
//   idade: 32,
// };

// var contato = {
//   telefone: 5521975210500,
//   email: "jose@dasilva.com",
// };

// var copia = {
//   ...pessoa,
//   ...contato,
//   cidade: "NOva Iguaçu",
//   estado: "RJ",
// };

// var notas_1 = [8, 5, 4, 8.2, 5, 10];
// var notas_2 = [7, 4, 5, 7.5, 6, 9];

// var todasNotas = [...notas_1, ...notas_2];
// console.log(todasNotas);

// DESTRUCTING

// var aluno1 = {
//   matricula: 1234,
//   nome: "José Silva",
//   telefone: 5521975210500,
//   cidade: "NOva Iguaçu",
// };
// var aluno2 = {
//   matricula: 666,
//   nome: "João Silva",
//   telefone: 552197909066,
//   cidade: "Nova Iguaçu",
// };
// var aluno3 = {
//   matricula: 666,
//   nome: "Antonio Silva",
//   telefone: 552197909066,
//   cidade: "Nova Iguaçu",
// };
// var aluno4 = {
//   matricula: 666,
//   nome: "Gilberto Silva",
//   telefone: 552197909066,
//   cidade: "Nova Iguaçu",
// };

// const alunos = [aluno1, aluno2, aluno3, aluno4];

// var [marcos, João, ...outros] = alunos;
// console.log(marcos, outros);

// REDUCE
// function novoAluno(nome, idade) {
//   return { nome, idade };
// }

// let alunos = [
//   novoAluno("Edgard", 24),
//   novoAluno("Nayara", 22),
//   novoAluno("Sanio", 26),
//   novoAluno("Yuzo", 28),
// ];

// function idadeDaTurma(total, aluno) {
//   return total + aluno.idade;
// }

// console.log(alunos.reduce(idadeDaTurma, 0));

// function novoAluno(nome, idade) {
//   return { nome, idade };
// }

// let alunos = [
//   novoAluno("Edgard", 24),
//   novoAluno("Nayara", 22),
//   novoAluno("Sanio", 26),
//   novoAluno("Yuzo", 28),
// ];

// MAP

// function alunoFuturo(aluno) {
//   return { name: aluno.nome, age: aluno.idade + 5 };
// }

// function mapa(callback) {
//   let resultado = [];

//   for (let i of this) {
//     resultado.push(callback(i));
//   }

//   return resultado;
// }

// alunos.mapa = mapa;

// console.log(alunos.mapa(alunoFuturo));

// // REDUCE

// function reduzir(callback, inicio) {
//   let total = inicio;
//   for (let i of this) {
//     total = callback(total, i);
//   }
//   return total;
// }

// alunos.reduzir = reduzir;

// console.log(alunos.reduzir(idadeDaTurma, 0));

// FETCH API

// let url = "https://api.exchangeratesapi.io/latest?base=USD&symbols=BRL";

// function converter() {
//   let resultado = document.getElementById("resultado");
//   let input = document.getElementById("valor");
//   let valor = input.value;
//   fetch(url)
//     .then((res) => {
//       return res.json();
//     })
//     .then((data) => {
//       let rate = data.rates.BRL;
//       let formatado = `${valor} dolares = ${valor * rate} reais`;
//       resultado.innerHTML = formatado;
//     });
// }

// TRY CATCH

let nome = "";

try {
  if (nome == "") {
    throw "Preenche samerda";
  }
  console.log(nome);
} catch (error) {
  console.log("houye um erro ", error);
}
console.log("boa noite");
