function qualOMaior(numa, numb) {
  let maior = numa > numb ? numa : numb;

  return maior;
}
console.log(qualOMaior(7, 8));

function OrderByAsc(array) {
  return array.sort();
}

console.log(OrderByAsc([1, 2, 3]));

function maiorNumero(array) {
  let maior = 0;
  for (i in array) {
    maior = Math.max(array[i], maior);
  }
  return maior;
}

console.log(maiorNumero([3, 5, 250, 10, 9]));

function media(array) {
  let soma = 0;

  array.forEach(function (e) {
    soma += e;
  });

  return soma / array.length;
}

console.log(media([4, 8, 6, 5, 10]));

function parOuImpar(numero) {
  return numero % 2 == 0 ? "Par" : "impar";
}

console.log(parOuImpar(1));

function MultiploDe4() {
  for (let i = 0; i < 100 + 1; i++) {
    if (i != 0) {
      console.log(i % 4 == 0 ? "pi" : i);
    } else {
      console.log(0);
    }
  }
}

MultiploDe4();

function props(obj) {
  console.log(obj.values);
}

const aluno = {
  nome: "Paulo",
  nota: 10,
};

function Objectprops(obj) {
  console.log(Object.keys(obj));
}
Objectprops(aluno);

function dataSplit(data) {
  return {
    dia: data.getDate(),
    mes: data.getMonth(),
    ano: data.getFullYear(),
  };
}

console.log(dataSplit(new Date()));

function alturaIdade(array) {
  let maior = 0;
  let menor = 0;
  let media = 0;

  for (objeto in array) {
    maior = Math.max(maior, array[objeto].altura);
    menor =
      objeto != 0
        ? Math.min(menor, array[objeto].altura)
        : array[objeto].altura;

    media += array[objeto].idade;
  }
  media = media / array.length;
  console.log(maior, menor, media);
}

alturaIdade([
  { altura: 1.8, idade: 23 },
  { altura: 1.9, idade: 27 },
  { altura: 1.65, idade: 33 },
  { altura: 1.83, idade: 44 },
  { altura: 1.91, idade: 45 },
  { altura: 1.54, idade: 16 },
]);

function padrao(altura) {
  let result = "";
  for (let i = 0; i < altura; i++) {
    result += "*";
    console.log(result);
  }
}

padrao(68);
