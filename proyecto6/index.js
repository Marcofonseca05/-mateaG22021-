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



// color 1

button1.addEventListener("click", cambiarFondo)
button2.addEventListener("click", cambiarFondo2)

 function cambiarFondo(){
    var button1 = document.querySelector("body");
button1.style.background = "#222";
 //para que vuelva el color rojo y no quede blanco
var parrafo = document.querySelector("#parrafo");
parrafo.addEventListener("mouseover", function () {
    parrafo.style.color = "red";
 })
 var parrafo2 = document.querySelector("#parrafo2");
parrafo2.addEventListener("mouseover", function () {
    parrafo2.style.color = "red";
 } )
 var parrafo3 = document.querySelector("#parrafo3");
 parrafo3.addEventListener("mouseover", function () {
     parrafo3.style.color = "red";
  } )
//color 2
}

button2.addEventListener("click", cambiarFondo2)

 function cambiarFondo2(){
    var button2 = document.querySelector("body");
button2.style.background = "red";
  // como el color del fondo es igual al parrafo se vuelve blanco

  //parrafo3 1
var parrafo = document.querySelector("#parrafo");
parrafo.addEventListener("mouseover", function () {
    parrafo.style.color = "white";
})
parrafo.addEventListener("mouseout", function () {
    parrafo.style.color = ""
})

//parrafo 2

var parrafo2 = document.querySelector("#parrafo2");
parrafo2.addEventListener("mouseover", function () {
    parrafo2.style.color = "white";
})
parrafo2.addEventListener("mouseout", function () {
    parrafo2.style.color = ""
})

//parrafo 3

var parrafo = document.querySelector("#parrafo");
parrafo3.addEventListener("mouseover", function () {
    parrafo3.style.color = "white";
})
parrafo3.addEventListener("mouseout", function () {
    parrafo3.style.color = ""
})

 }

 
 button3.addEventListener("click", cambiarFondo3)
 function cambiarFondo3(){
    var button3 = document.querySelector("body");
button3.style.background = "#00ff08";
var parrafo = document.querySelector("#parrafo");
parrafo.addEventListener("mouseover", function () {
    parrafo.style.color = "blue";
 })
 var parrafo2 = document.querySelector("#parrafo2");
parrafo2.addEventListener("mouseover", function () {
    parrafo2.style.color = "blue";
 } )
 var parrafo3 = document.querySelector("#parrafo3");
 parrafo3.addEventListener("mouseover", function () {
     parrafo3.style.color = "blue";
  } )
 }
 button4.addEventListener("click", cambiarFondo4)
 function cambiarFondo4(){
    var button4 = document.querySelector("body");
button4.style.background = "#0494d9";
var parrafo = document.querySelector("#parrafo");
parrafo.addEventListener("mouseover", function () {
    parrafo.style.color = "yellow";
 })
 var parrafo2 = document.querySelector("#parrafo2");
parrafo2.addEventListener("mouseover", function () {
    parrafo2.style.color = "yellow";
 } )
 var parrafo3 = document.querySelector("#parrafo3");
 parrafo3.addEventListener("mouseover", function () {
     parrafo3.style.color = "yellow";
  } )

 }

 //imagen

 
 