//parrafo3 1
var parrafo = document.querySelector("#parrafo");
parrafo.addEventListener("mouseover", function () {
    parrafo.style.color = "red";
})
parrafo.addEventListener("mouseout", function () {
    parrafo.style.color = ""
})

//parrafo 2

var parrafo2 = document.querySelector("#parrafo2");
parrafo2.addEventListener("mouseover", function () {
    parrafo2.style.color = "red";
})
parrafo2.addEventListener("mouseout", function () {
    parrafo2.style.color = ""
})

//parrafo 3

var parrafo3 = document.querySelector("#parrafo3");
parrafo3.addEventListener("mouseover", function () {
    parrafo3.style.color = "red";
})
parrafo3.addEventListener("mouseout", function () {
    parrafo3.style.color = ""
})


//Formulario
var name = document.getElementById("nombre");

var vacio2 = document.getElementById("vacio2");
var boton = document.getElementById("boton");

boton.addEventListener("click", mostrarGracias)


function mostrarGracias() {
    var name = document.getElementById("nombre").value;
    document.getElementById("vacio2").innerHTML = 'Gracias ' + name +" por apoyar";
}

//botones

var botones = document.getElementById("button");
botones.addEventListener("click", cambiarcolor)
function cambiarcolor(){
    botones.body.color = "red"
}
