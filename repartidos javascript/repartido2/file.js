/**Valor absoluto */

var num = parseInt(prompt ("Ingrese un numero"));

if (num >=0) {
    document.write( num);
} else  {
    document.write( num *-1  );
}

/**El mayor */

var num1 =parseInt(prompt ("Ingrese un numero"));
var num2 =parseInt(prompt ("Ingrese un numero"));

if (num1 > num2) {
    document.write( num1 )
} else {
    alert(num2)
}



/*etapas de la vida */

var edad = parseInt(prompt ("ingresar edad"));

if (edad >= 0 && edad <= 2) {
    alert("bebe" )
} 
else if (edad > 2 && edad < 10){
    alert("niño")
}
if (edad > 10 && edad < 15) {
    alert("Preadolescente")
} 
else if (edad >= 15 && edad < 20){
    alert("adolecente")
}
if (edad >= 20 && edad < 25) {
    alert("joven adulto")
} 
else if (edad >= 25 && edad < 60){
    alert("adulto")
}
if (edad >=60 && edad < 75) {
    alert("Jubilado")
} 
else if (edad >= 75 && edad < 100){
    alert("Adulto mayor")
}
/*/
/* Socio del club*/

var edad = parseInt(prompt ("Ingrese edad del socio"));
var carne = confirm("tenes carnet al dia?" );

if (edad >= 25 && carne== true) {
    document.write("Puede votar" +"<br>")
}
else {
    document.write("no puede votar" +"<br>")
}


/**Multiplo comun */

var numero = parseInt(prompt ("ingrese su numero"))



if(( numero % 3 ) == 0){

	document.write(numero + ' es multiplo de 3');
    
}else{

	document.write(numero + ' no es multiplo de 3' +"<br>");

}
if(( numero % 7 ) == 0){

	document.write(numero + ' es multiplo de 7');
    
}else{

	document.write(numero + ' no es multiplo de 7');

}

/**Dia de la Semana */

var dia = parseInt(prompt ("ingrese su numero"))

switch (dia){
    case 1:
        alert("Lunes");
        break;
    case 2:
        alert("Martes");
        break;
    case 3:
        alert("Miercoles");
        break;
    case 4:
        alert("Jueves");
        break;
    case 5:
        alert("Viernes");
        break;
    case 6:
        alert("Sabado");
        break;
    case 7:
        alert("Domingo");
        break;
    

}

/**Boletos */

var edad = parseInt(prompt ("ingresar edad"));

if (edad <= 12 ) {
    alert("no paga boleto" )
} 
else if ( edad >= 70 ){
    alert("No paga boleto")
}

if (edad > 12 && edad < 70 )
    alert("Debe pagar boleto")


