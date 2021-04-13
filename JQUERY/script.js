// CHILDREN
// let body = $("body");

// console.log(body.children("#lista1").fadeOut(1000));
// body.find(".item2").show(5000);

// Chainging
// let jq = $("#lista1").slideUp(2000).slideDown(2000).fadeOut(1000);

// console.log($());
// console.log(jq);

// let obj = {
//   print10: function () {
//     console.log("10");
//     return this;
//   },

//   print20: function () {
//     console.log("20");
//     return this;
//   },
// };

// obj.print10().print10().print20().print10();

// Element Content
// console.log($("#novo").attr("name"));

// console.log($("#lista1").text("<li> Novo Item 1 </li> <li> Novo Item 2 </li>"));

// console.log($("li").attr("name", (i) => `item ${i}`));

// $("li").attr("name", (i, oValue) => oValue + i);

// $("input").attr("maxlength", 5).attr("type", "password");

// Selecionando Elementos por atributos
// console.log($("#lista1").find("[key = 2 ]").remove());

// Removendo elementos

// $("#lista1").remove();
// $("#lista1").empty();
// $("li").remove("[key = 1] , [key = 3]");

// $(".rect").prepend("<li class = 'item'>Teste</li>");

// setTimeout(function () {
//   $("h1").addClass("bg-blue");
// }, 1000);

// setTimeout(function () {
//   $("h1").removeClass("bg-blue");
// }, 2000);

// setInterval(() => {
//   $("h1").toggleClass("bg-blue");
// }, 300);

// CSS

// let red = 0;
// let green = 255;

// setInterval(() => {
//   $("h1").css({
//     backgroundColor: `rgb(${red++},0,${green--}`,

//     color: `rgb(${green--},${green / 2},${red++}`,
//   });
// }, 10);

// DIMENSÕES
// let box = $(".box");
// box.outerWidth("1000px");

// box.append(`largura ${box.width()} <br>
// largura + padding ${box.innerWidth()}<br>
// largura + padding + borda ${box.outerWidth()}<br>
// largura + padding + borda + margem ${box.outerWidth(true)}<br>

// `);
