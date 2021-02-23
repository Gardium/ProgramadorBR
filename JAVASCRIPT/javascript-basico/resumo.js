// Função construtora

function Objeto(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
}

var c = new Objeto("Vitoria", "Balan");

console.log(c);
// Função

function obj(nome, sobrenome) {
  return { nome, sobrenome };
}

var b = obj("Edgard", "Araujo");

console.log(b);

// Direto

var a = {
  nome: "igor",
  sobrenome: "Oliveira",
};

console.log(a);
