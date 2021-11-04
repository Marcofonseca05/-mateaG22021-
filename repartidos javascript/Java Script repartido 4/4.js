/*/ 1 Nombres Famosos 2

var famosos= ["Cristiano Ronaldo","Lionel Messi","Keylor Navas","Thibaut Courtois","Rafael Varane","Sergio Ramos"]
famosos.push(prompt("Ingresar una persona famosa del fútbol"))

document.write(famosos);

/*/

/*/ 2 Nombres de Famosos 3

var famosos= ["Tobey Maguire","Andrew Garfield ","James Franco","Emma Stone","Tom Hardy","Tom Holland"]
famosos.push(prompt("Ingresar una persona famosa"))

document.write(famosos);

/*/

/*/ 3 Números pares entre 0 y un máximo 

var ingresar=prompt("Ingrese un número")
var num=[0]
for(let y =1; y <ingresar; y++){num.push(y)}

for(number of num){
 
if(number %2==0){
     document.write(number + " Es par" + "<br>");
 }
 
 else(document.write(number + " No es par" + "<br>"))
}

/*/

/*/ 4 Mayor (edad, tope): 
var edad=parseInt(prompt("Ingrese una edad"))
var tope=parseInt(prompt("Ingrese un valor tope"))

if (edad > tope){
    document.write("La edad es "+ edad)

}else{
    document.write("El tope es "+ tope)
    }
/*/

/*/ 5 Usuario y contraseña
var nombre=prompt("Ingrese su nombre de usuario")
var contraseña=prompt("Ingrese su contraseña")

const nombrecorrecto="Franz24"
const contraseñacorrecta="patria02"

if (nombre == nombrecorrecto && contraseña==contraseñacorrecta){
    alert("inicio exitoso")
}else{
 alert("te equivocaste")   
}
/*/

/*/ 6 Pseudocódigo

var n1=parseInt(prompt("Ingrese un numero"))
var n2=parseInt(prompt("Ingrese otro numero"))

var suma= n1+n2

while (suma < 100){
    
    if(n1 && n2>=0 ){
   
        alert(suma)
    }
    
    else {
       
        alert("Error verifica  el numero ingresado")   
    }
    
}
/*/

/*/ 7 Diagrama de flujo a código en javaScript

var numero1=parseInt(prompt("Ingrese un numero"))
function ejecicio7(){

    if (numero1 > 10){
    numero1=parseInt(prompt("Ingrese otro numero"))
    document.write("Primer numero ingresado es : " + numero1)
    
    if(numero1 > 100){
        document.getElementById("7").innerHTML="A"
    }else
    {
        document.getElementById("7").innerHTML="B"
    }
}
else
{
    numero1=parseInt(prompt("Ingrese otro numero"))
    if(numero1 > 1000){
        document.getElementById("7").innerHTML="C"
    }
    else{
        document.getElementById("7").innerHTML="D"
        }
    }
}
ejecicio7();
/*/


