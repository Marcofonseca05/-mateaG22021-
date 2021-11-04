/*/ 1 Números pares entre 0 y un máximo

var ingresar = prompt("Ingrese un número")
var num = [0]
for (let y = 1; y < ingresar; y++) { num.push(y) }

for (number of num) {

    if (number % 2 == 0) {
        document.write(number + " Es par " + "<br>");
    }

    else (document.write(number + " No es par " + "<br>"))
}
/*/
/*/ 2 Edades

var edad = parseInt(prompt("Ingresar edad"));

do {
    if (edad >= 18) { document.write(edad + " Es mayor de edad " + "<br>") }

    else if (edad < 18) { document.write(edad + " Es menor de edad " + "<br>") }

    edad = prompt("Otra edad")
}

while (edad != 0);
/*/
/*/3 Letra por letra
var palabras=prompt("Ingresar una palabra")
for(letras of palabras){
    document.write(letras + " <br>")
}
/*/
/*/ 4 Potencias de 2
 
var numero = 2;

 
while(numero <10000){
     document.write(numero + "2= ")
     document.write(numero + "<br>")
     numero=numero*2;
 }
/*/

/*/ 5 Mostar hasta el 5

var numero1=1;

for(numero1; numero1<=10; numero1++){
    if(numero1==6){break}
    document.write(numero1)
}
document.write("<br>")
/*/

/*/ 6 Saltarse el 5
var numero2=1;
for(numero2;numero2<=10; numero2++){
    if(numero2==5){continue}
    document.write(numero2)
};
/*/

/*/ 7 Nombres famosos

var famosos = ["Kobe Bryant", " Lebron James", " Michael Jordan", "Stephen Curry", "Kevin Durant "]

for (famoso of famosos) {
    document.write(famosos + "<br>")
}
/*/

/*/ 8 Multiplos de 3

var unoaldiez=[1,2,3,4,5,6,7,8,9,10]

for(number of unoaldiez){
    if(number%3==0){document.write(number + " Es multiplo de 3 " + "<br> ")}
    else{document.write(number + " No es mutliplo de 3 " + "<br> ")}
}
/*/








