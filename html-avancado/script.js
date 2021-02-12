// Attr Personalisados 1

// let image = document.getElementById("like");

// let lastImage = image.getAttribute("src");

// image.addEventListener("click", function (e) {
//   image.setAttribute("cor", "vermelho");
// });

// Attr Personalisados 2

// let lista = document.getElementById("lista");

// lista.dataset.n = "4";

// let id = lista.dataset.id;

// console.log(id);
// let num = parseInt(lista.dataset.n);

// let conteudo = "";

// for (let i = 0; i < num; i++) {
//   conteudo += "<li>" + i + "</li>";
// }

// lista.innerHTML = conteudo;

// Video Controles

// let video = document.getElementById("video1");

// function retroceder() {
//   video.currentTime -= 15;
// }

// function avancar() {
//   video.currentTime += 15;
// }

// function diminuir_vel() {
//   video.playbackRate -= 0.5;
// }

// function aumentar_vel() {
//   video.playbackRate += 0.5;
// }

// function play() {
//   video.play();
// }

// function stop() {
//   video.pause();
//   video.currentTime = 0;
//   video.playbackRate = 1;
// }

// video.addEventListener("mouseover", function () {
//   let btns = document.getElementsByClassName("controle")[0];
//   btns.style.display = "block";
// });

// video.addEventListener("mouseout", function () {
//   let btns = document.getElementsByClassName("controle")[0];
//   btns.style.display = "none";
// });

// Animações com HTML

// let xInicial = 0;
// let yInicial = 0;
// let jogador = document.getElementById("jogador");

// function moverJogadorPara(x, y) {
//   let posX = x + "px";
//   let posY = y + "px";
//   jogador.style.top = posX;
//   jogador.style.left = posY;
// }

// setInterval(function () {
//   moverJogadorPara(xInicial++, yInicial++);
// }, 4);

// CANVAS

let tela = document.getElementById("tela");

let ctx = tela.getContext("2d");

let img = new Image();
img.src = "./assets/teste.jpg";

// LINHA
// ctx.moveTo(0, 0);

// ctx.lineTo(250, 250);
// ctx.lineWidth = 5;

// ctx.lineTo(500, 0);
// ctx.strokeStyle = "blue";

// ctx.stroke();

// RETANGULO PREENCHIDO
// ctx.fillStyle = "red";
// ctx.fillRect(10, 10, 100, 200);

// RETANGULO Bordas
// ctx.strokeStyle = "red";
// ctx.strokeRect(10, 10, 100, 200);

// Retangulo Final
// ctx.rect(10, 10, 100, 200);
// ctx.fillStyle = "red";
// ctx.strokeStyle = "blue";
// ctx.fill();
// ctx.lineWidth = 5;
// ctx.stroke();

// ctx.clearRect(20, 20, 80, 50);

// PATHs

// ctx.beginPath();
// ctx.lineWidth = 4;
// ctx.strokeStyle = "red";
// ctx.moveTo(10, 10);
// ctx.lineTo(400, 300);

// ctx.stroke();

// ctx.beginPath();
// ctx.lineWidth = 7;
// ctx.strokeStyle = "blue";
// ctx.moveTo(50, 10);
// ctx.lineTo(300, 300);
// ctx.lineTo(200, 300);
// ctx.fillStyle = "green";
// ctx.closePath();
// ctx.fill();
// ctx.stroke();

// CANVAS ANIMATION

// let circle = {
//   x: 250,
//   y: 250,
//   raio: 100,
//   inicio: 0,
//   fim: 0,
//   antihorario: true,
// };

// function drawnCircle(circle) {
//   ctx.beginPath();
//   ctx.rect(0, 0, 500, 500);
//   ctx.fillStyle = "beige";
//   ctx.fill();
//   ctx.beginPath();
//   ctx.fillStyle = "blue";
//   ctx.strokeStyle = "red";
//   ctx.arc(
//     circle.x,
//     circle.y,
//     circle.raio,
//     circle.inicio,
//     circle.fim,
//     circle.antihorario
//   );
//   ctx.fill();
//   ctx.stroke();
// }

// drawnCircle(circle);

// setInterval(() => {
//   if (circle.fim < Math.PI * 2) {
//     circle.fim += 0.3;
//     circle.x += 3;
//   }
//   drawnCircle(circle);
// }, 40);

img.onload = desenharImg;

function desenharImg() {
  ctx.drawImage(this, 20, 20, this.naturalWidth / 2, this.naturalHeight / 2);
}
