/* 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
evento click que ejecute un console log con la información del evento del click */
function addListeners() {
    document.querySelector("#btnToClick").addEventListener("click", sayHello);
    document.querySelector(".focus").addEventListener("click", inputOne);
    document.querySelector(".value").addEventListener("click", inputTwo);
}

window.onload = function () {
    addListeners();
}

function sayHello() {
    console.log("Acabas de hacer click en el botón.");
}

function inputOne() {
    let formLogin = document.getElementsByClassName('focus');
    console.log(input);
}
function inputTwo() {
    let formLogin = document.getElementsByClassName('value');
    console.log(input);
}
//1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.

//1.3 Añade un evento 'input' que ejecute un console.log con el valor del input