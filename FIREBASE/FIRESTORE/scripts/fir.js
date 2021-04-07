var firebaseConfig = {
  apiKey: "AIzaSyDRVok_yEcSZVrI33qWnDTelTDC67bvSHA",
  authDomain: "colegio-1ca73.firebaseapp.com",
  databaseURL: "https://colegio-1ca73-default-rtdb.firebaseio.com",
  projectId: "colegio-1ca73",
  storageBucket: "colegio-1ca73.appspot.com",
  messagingSenderId: "142242875154",
  appId: "1:142242875154:web:5f23775e86b5472ccad5cb",
  measurementId: "G-QWXLG4ZFY2",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();
let auth = firebase.auth();

function read() {
  db.collection("lista")
    .get()
    .then((snapshot) => {
      snapshot.forEach((doc) => {
        console.log(doc.data());
      });
    })
    .catch((err) => console.log(err));
}

function userCreate(newUserEmail, newUserPass) {
  auth
    .createUserWithEmailAndPassword(newUserEmail, newUserPass)
    .then((user) => console.log(user))
    .catch((error) => console.log(error));
}

function userLogin(userEmail, userPass) {
  auth
    .setPersistence(firebase.auth.Auth.Persistence.SESSION)
    .then(() => {
      auth
        .signInWithEmailAndPassword(userEmail, userPass)
        .then((user) => console.log("Logado com sucesso"))
        .catch((error) => console.log(error));
    })
    .catch((err) => console.log(err));
}

function userisLoggedIn() {
  auth.onAuthStateChanged((user) => {
    if (user) {
      console.log(user.email);
    } else {
      console.log("é... tem nada aqui não");
    }
  });
}

function userLogout() {
  auth
    .signOut()
    .then((obj) => {
      console.log("BYE");
    })
    .catch((err) => {
      console.log(err);
    });
}
// userisLoggedIn();
setTimeout(userLogin("edgard.araujo.96@gmail.com", "edga1229"), 2000);

function write() {
  db.collection("lista")
    .add({
      title: "Novo objeto",
      numero: Math.random(),
    })
    .then((doc) => {
      console.log(doc);
    })
    .catch((err) => console.log(err));
}

write();
read();
