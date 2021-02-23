// Nome do Aluno - nota 1 - nota 2 - média -aprovado/reprovado

var nomes = ["igor", "Jose", "Maria"];
var notasA = [7.0, 6.5, 9.5];
var notasB = [8.0, 7.0, 8.5];

var media = function (n1, n2) {
  return (n1 + n2) / 2;
};

var passou = function (media) {
  return media >= 7 ? "APROVADO" : "REPROVADO";
};

for (var i in nomes) {
  var nota1 = notasA[i];
  var nota2 = notasB[i];

  var m = media(nota1, nota2);
  console.log(
    nomes[i] + " - " + nota1 + " - " + nota2 + " - " + +m + " - " + passou(m)
  );
}
