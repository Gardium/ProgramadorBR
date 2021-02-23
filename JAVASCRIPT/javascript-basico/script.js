//console.log('Teste ')

//Criando variaveis
/* var a = 'Placa de Captura'
console.log(a)


var b = "hd"
b = a
console.log(b) */

//Tipos de dados

/* var a = 'Palavra'
console.log(a) */

//Operadoração aritimetica
// var a = 10
// var b = 15

// //soma
// var c = a + b
// console.log(c)
// //subtração 
// c = a - b
// console.log("subtração:",c)

// //Multiplicação
// c = a * b
// console.log('Multiplicação:' ,c)

// //Divisão
// c = a /b 
// console.log('Divisão:', c)

// //Modulo
// c = a % b
// console.log('Modulo', c)

// //Incremento
// a = a + 1 
// console.log('Incremento', a)
// //decremento
// a = a - 1 
// console.log('decremento', a)

// console.log('Condicionais')
// var idade = 17
// if(idade >=18){
//   console.log('Pode')
// }else{
//   console.log('Não pode')
// }
// console.log('Operadores Ternários')
// var idade = 17
// idade >= 18 ? console.log('Pode'): console.log('Não Pode') 

// console.log('Switch')
// var nota1 = 8.0
// var nota2 = 8.0
// var media = (nota1+nota2)/2
// var conceito = ""

// if(media >= 8){
//   conceito = "Ótimo"
// }else if(media >= 6.5){
//   conceito = "Bom"
// }else{
//   conceito = "Regular"
// }

// switch(conceito){
//   case "Ótimo":
//     console.log('Parabens você é um ótimo aluno')
//     break

//   case "Bom":
//     console.log('Você está quase perfeito')
//     break
  
//   case "Regular":
//     console.log('Estude mais um pouco')
//     break

//   default:
//     console.log("Houve algum error")
// }

// console.log('Repetições')

// var numero = 5

// for(var vez = 0; vez <= numero ; vez++){
//   console.log('Executando o for, pelo ' + vez + "vez")
// }
// console.log('Acabou')

// console.log('Array')

// console.log('Declando um aray')
// //var alunos =  new Array('Igor', 'Jose', 'Marcos', 'Mariana')
// var alunos = ['Igor', 'Jose', 'Marcos', 'Mariana']
// console.log('Acessando elementos')
// console.log(alunos[0])
// console.log('Utilizando Array')
// for(let i = 0; i < alunos.length; i++){
//   console.log('Nome do Aluno: ' + alunos[i])
// }

// console.log('Funções')
// console.log('Funções nomeadas')
// function calculaMedia(nota1, nota2){
//   return media = (nota1 + nota2) / 2
// }

// console.log(calculaMedia(10,8))

// function saudacao(){
//   return 'Olá Mundo'
// }

// var s = saudacao()
// console.log(s)

// console.log('Funções anonimas')
// var media = function (n1, n2){
//   return (n1 + n2) / 2
// }

// console.log("Funçao anonimas " +  media(5,6))

// var media = (n1, n2) =>{
//   return( n1 + n2) / 2
// }
// console.log('Arrow Funcion ' + media(7,8))


//Juntando todo o conhecimento
// Nome do Aluno - Nota 1 - Nota 2 - média - Aprovado

// var nomes = ["Igor", "José", "Maria"]
// var notasA = [7.0, 6.5, 9.5]
// var notasB = [8.0, 7.0, 8.5]

// function media(n1, n2){
//   return (n1 + n2) / 2
// }

// function passou(media){
//   if(media > 7){
//     return "Aprovado"
//   }else{
//     return 'Reporvado'
//   }
 
// }

// for(var index in nomes){
//   var nota1 = notasA[index]
//   var nota2 = notasB[index]
//   var m = (nota1 + nota2) / 2
//   console.log(nomes[index] + " - " + nota1 + " - " + nota2 + " - " + m + " - " + passou((m)))
// }

// console.log('Objetos Propriedades')
// var aluno = { nome: "Igor", nota1: 7.5
// }

// aluno.matricula = 12345
// aluno["sobrenome"] = "Oliveira"
// console.log(aluno)

// console.log('Objetos Métodos')

// function calcMedia(){
//   return((this.notas[0] + this.notas[1]) / 2)
// }

// var aluno = {
//   nome: "Felipe", 
//   notas: [8,8],
//   media: calcMedia,

// } 
// var aluno1 = {
//   nome: "Joao", 
//    notas: [6,8],
//   media: calcMedia
// }

// console.log(aluno.nome)
// console.log(aluno.media())

// console.log(aluno1.nome)
// console.log(aluno1.media())

// console.log('Objetos Construtores')

// function criarAluno(nome, n1, n2){
//   return{
//     nome: nome,
//     nota1: n1,
//     nota2: n2,
//     media: function(){
//          return (this.nota1 + this.nota2) / 2
//      }
//   }
// }

// function aluno(nome, n1, n2){
//   this.nome = nome;
//   this.nota1 = n1;
//   this.nota2 = n2;

//   this.media = function (){
//     return (this.nota1 + this.nota2)/2
//   }
// }

// // var turma = [
// //   criarAluno('Igor', 9 ,6 ),
// //   criarAluno('João', 7, 4),
// //   criarAluno('Marcela',8,7.5)
// // ]

// var a = new aluno("Igor", 8, 7)
// console.log(a.media())
// // var aluno = turma[2]
// // turma.forEach(function(elemento){
// //   console.log(elemento)
// // })

// console.log('Datas')
// // var d = new Date()
// console.log('Criando uma data específica')
// var d = new Date(2020, 11, 08, 18, 25)
// console.log(d)