const TURMA = "turmaA";
// db.collection("turmaA")
//   .get() // Ler todos os dados da collection
//   .then((snapshot) => {
//     snapshot.forEach((doc) => {
//       let aluno = doc.data();
//       console.log(aluno.nome.toLowerCase());
//     });
//   });

// let docRef = db.collection("turmaA").doc("ok700kIGdc4nLFiio0nQ");

// docRef
//   .get()

//   .then((doc) => {
//     let aluno = doc.data();
//     console.log(aluno.notas);
//   });

//Buscas

// db.collection(TURMA)
//   .where("notas.nota1", ">", 5)
//   .get()
//   .then((snapshot) => {
//     snapshot.forEach((doc) => {
//       let aluno = doc.data();
//       console.log(aluno.nome, aluno.sobrenome);
//     });
//   });

//INSERT UPDATE

//insert
// db.collection(TURMA)
//   .add({
//     nome: "Vitoria",
//     sobrenome: "Balan",
//     notas: {
//       nota1: 9.6,
//       nota2: 7.5,
//     },
//   })
//   .then((doc) => {
//     console.log(doc.data());
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// SET inserir novo / sobrescrever existente localizado pelo id
// db.collection(TURMA)
//   .doc("NovoAluno")
//   .set({
//     nome: "Renata ",
//     sobrenome: "Balan",
//     notas: {
//       nota1: 3.6,
//       nota2: 2.5,
//     },
//   })
//   .catch((err) => console.log(err));

// UPDATE atualizar registros pelo id
// db.collection(TURMA)
//   .doc("NovoAluno")
//   .update({
//     faltas: firebase.firestore.FieldValue.increment(-2),
//   })
//   .catch((err) => console.log(err));

// // select;
// db.collection(TURMA)
//   .get()
//   .then((snapshot) => {
//     snapshot.forEach((doc) => {
//       console.log(doc.data());
//     });
//   });

// Atualização em tempo real

// db.collection(TURMA).onSnapshot((snapshot) => {
//   snapshot.forEach((doc) => {
//     let aluno = doc.data();
//     console.log(aluno.nome, aluno.sobrenome);
//   });
// });

// let docRef = db.collection("turmaA").doc("ok700kIGdc4nLFiio0nQ");

// docRef.onSnapshot((doc) => {
//   let aluno = doc.data();
//   console.log(aluno.advertencias.forEach((adv) => console.log(adv.desc)));
// });

// db.collection(TURMA)
//   .where("notas.nota1", ">", 5)
//   .onSnapshot((snapshot) => {
//     snapshot.forEach((doc) => {
//       let aluno = doc.data();
//       console.log(aluno.nome, aluno.sobrenome);
//     });
//   });

// db.collection(TURMA).doc("NovoAluno").update({
//   estados: firebase.firestore.FieldValue.delete(),
// });

db.collection(TURMA)
  .get()
  .then((snapshot) => {
    snapshot.forEach((elemento) => {
      deletar(elemento.id);
    });
  })
  .catch((err) => {
    console.log(err);
  });

// db.collection(TURMA)
//   .doc("NovoAluno")
//   .delete()
//   .then(() => {
//     console.log("Documento deletado com sucesso");
//   })
//   .catch(console.log("Algo de errado não está certo"));

function deletar(id) {
  db.collection(TURMA)
    .doc(id)
    .delete()
    .then(console.log("Documento deletado com sucesso", new Date()))
    .catch((err) => console.log("Algo de errado não está certo", new Date()));
}
