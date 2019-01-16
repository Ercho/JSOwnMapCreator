// IMPORTOWANIE WIELKOŚCI PLANSZY
document.getElementById("sel").onchange = function () {
    document.getElementById("plansza").innerHTML = "";
    twrz();
    console.log("Plansza Stworzona")
}
// PRZYCISKI Z MENU
document.getElementById("wall").onclick = function (e) {
    col = "33c816";
    atrib = e.target.id;
}
document.getElementById("enemy").onclick = function (e) {
    col = "d13f10";
    atrib = e.target.id;
}
document.getElementById("treasure").onclick = function (e) {
    col = "3321a5";
    atrib = e.target.id;
}
document.getElementById("light").onclick = function (e) {
    col = "f5ff00";
    atrib = e.target.id;
}
document.getElementById("item1").onclick = function (e) {
    col = "9800f5";
    atrib = e.target.id;
}
document.getElementById("item2").onclick = function (e) {
    col = "00cbe8";
    atrib = e.target.id;
}
document.getElementById("delete").onclick = function (e) {
    col = "fff";
    atrib = '';
}
document.getElementById("gen").onclick = function (e) {
    downl();
}
document.getElementById("send").onclick = function (e) {
    var x = document.getElementById("copy").value;
    localStorage.setItem("plansza", x);
}