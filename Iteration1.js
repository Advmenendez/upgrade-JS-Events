function addListeners() {
    document.querySelector("#btnToClick").addEventListener("click", clickame);
   
}

window.onload = function () {
    addListeners();
}

function clickame() {
    console.log("Acabas de hacer click en el botón.");
}

document.querySelector(".focus").addEventListener("focus",()=>{
    console.log(document.querySelector(".focus").value)  
})
document.querySelector(".value").addEventListener("input",()=>{
    console.log(document.querySelector(".value").value)  
})
