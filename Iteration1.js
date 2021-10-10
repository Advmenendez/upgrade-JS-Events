function addListeners() {
    document.querySelector("#btnToClick").addEventListener("click", clickame);
    document.querySelector(".focus").addEventListener("Escribe", inputOne);
    document.querySelector(".value").addEventListener("Escribe", inputTwo);
}

window.onload = function () {
    addListeners();
}

function clickame() {
    console.log("Acabas de hacer click en el botón.");
}

function inputOne() {
    let formFocus = document.getElementsByClassName('focus');
    if(formFocus=="Hola")
    console.log("Hola");
}
function inputTwo() {
    let formValue= document.getElementsByClassName('value');
    console.log(input);
}