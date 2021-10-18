alert("Ingresa tu nombre y apellido.");

let nombre;
let apellido;

document:querySelector("#btnMostrarNombre").addEventListener("click",MostrarNombre);

function MostrarNombre(){
    nombre = document.querySelector("#txtNombre").value ;
    apellido =document.querySelector("#txtApellido").value ;

    alert(apellido +", "+ nombre);
}