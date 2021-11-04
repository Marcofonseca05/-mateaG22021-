 /*/ 1 Pelicula Favorita+
 
 var peliculas = {
     
    Nombre: "El Sorprendente Hombre Araña 2: La venganza de Electro",
     
     Año: "2014",

     Actores_principales: [" Andrew Garfield "," Emma Stone "],

     Director: "Marc Webb",

     Género:"Acción , Fantasia , Aventura , Ciencia ficción ,Super Heroés",

     Duración:"142 minutos",
     
 }
 
 document.write(peliculas.Nombre + " <br> " + peliculas.Actores_principales + "<br>" + peliculas.Director + "<br>" + peliculas.Género + "<br>" + peliculas.Duración +  "<br>")

/*/ 
 
/*/ 2 Pelicula Favorita 2


var pelicula=["El Sorprendente Hombre Araña 2: La venganza de Electro"] 
 
document.write(pelicula + "<br>")


peliculas.Apta = " Peliculas apta para todo público"

peliculas.País = " Estados Unidos"

peliculas.Idioma = "Inglés de Estaos Unidos"

document.write(  peliculas.Actores_principales + "<br>" + peliculas.Director + "<br>" + peliculas.Duración +  "<br>" + peliculas.Apta + "<br>" + peliculas.País + "<br>" + peliculas.Idioma + "<br>") 

delete peliculas.Género

/*/
 
/*/ 3 Calculadora Científica

// Cuentas básicas
var num1=parseInt(prompt("Ingresar un número"));
var signo=prompt( "Ingresar signo");
var num2=parseInt(prompt( "Ingresar otro número"));

switch(signo){

    case "+": alert(num1 + num2)
    break;

    case "-": alert(num1 - num2)
    break;

    case "*": alert(num1 * num2)
    break;

    case "/": alert(num1 / num2)
    break;

}

// Raíz

var num3=parseInt(prompt( "Ingresar otro número"));

document.write(Math.sqrt( num3 ) + "<br>")

var num4=parseInt(prompt( "Ingresar número"));

// Logarito en base 10
document.write(Math.log10(num4))

//Potencia
var num5=parseInt(prompt( "Ingresar otro número"));
var num6=parseInt(prompt( "Ingresar otro número"));
document.write(Math.pow(num5 , num6) + "<br>")
/*/

/*/ 4 En que mes estamos
var mes=parseInt(prompt("Ingresar un número del 1 al 12 y te indicare el mes"))

var meses = {

    Enero  : " Enero ",
    
    Febrero : "Febrero",

    Marzo : "Marzo",

    Abril : "Abril",

    Mayo : "Mayo",

    Junio : "Junio",

    Julio : "Julio",

    Agosto : "Agosto",

    Setiembre : "Setiembre",

    Octubre : "Octubre",

    Noviembre : "Noviembre",

    Diciembre : "Diciembre"

};

if( mes == 1){
    document.write(meses.Enero)
}

else if(mes == 2 ){
    document.write(meses.Febrero)
}

if(mes == 3){
    document.write(meses.Marzo)
}
else if(mes == 4){
    document.write(meses.Abril)
}
if(mes == 5){
    document.write(meses.Mayo)
}
else if(mes == 6){
    document.write(meses.Junio)
}
if(mes == 7){
    document.write(meses.Julio)
}
else if(mes == 8){
    document.write(meses.Agosto)
}
if(mes == 9){
    document.write(meses.Setiembre)
}
else if(mes == 10){
    document.write(meses.Octubre)
}
if(mes == 11){
    document.write(meses.Noviembre)
}
else if(mes == 12){
    document.write(meses.Diciembre)
}

/*/

/*/ 5 Estudiantes de Matea

var estudiante1 = [" Nombre : Franco Acosta " + "<br> " + " Hobbies: Jugar a videojuegos y Mirar series " + "<br>" + " Deporte favorito : Fútbol " + "<br>" +" Edad  : 19 años " + "<br>" + "Género : Masculino " + "<br>" + " Mascotas : 2 " + "<br>" + "Género musical favorito : Trap y Rap " ] + "<br>" + "<br>"
var estudiante2 = [" Nombre : Bruno Juayeck " + "<br> " + " Hobbies: Dibujar " + "<br>" + " Deporte favorito : Baseball " + "<br>" +" Edad  : 21 años " + "<br>" + "Género : Masculino " + "<br>" + " Mascotas : 4 " + "<br>" + "Género musical favorito : Rock " ] + "<br>" + "<br>"
var estudiante3 = [" Nombre : Pablo Villanueva " + "<br> " + " Hobbies: Jugar a la computadora " + "<br>" + " Deporte favorito : No tiene " + "<br>" +" Edad  : 19 años " + "<br>" + "Género : Masculino " + "<br>" + " Mascotas : 1 " + "<br>" + "Género musical favorito : Trap " ] + "<br>" + "<br>"
var estudiante4 = [" Nombre : Lucas Díaz " + "<br> " + " Hobbies: Jugar al lol " + "<br>" + " Deporte favorito : Fútbol " + "<br>" +" Edad  : 21 años " + "<br>" + "Género : Masculino " + "<br>" + " Mascotas : 1 " + "<br>" + "Género musical favorito : K-Pop " ] + "<br>" + "<br>"
var estudiante5 = [" Nombre : Marco Zurdo " + "<br> " + " Hobbies: Hacer calistenia " + "<br>" + " Deporte favorito :Fútbol " + "<br>" +" Edad  : 19 años " + "<br>" + "Género : Masculino " + "<br>" + " Mascotas : 3 " + "<br>" + "Género musical favorito : Trap " ] + "<br>" + "<br>"

document.write(estudiante1 + estudiante2 + estudiante3 + estudiante4 + estudiante5) 


/*/

/*/ 6 Comentarios
    
var com1 =prompt(" Ingrese un comentario ")
var com2=prompt (" Otro comentario ")
var com3=prompt (" Otro" )
var com4=prompt (" Alguno más  ")
var com5=prompt(" Y un último ")

document.write( " El primer comentario es : " + com1 + "<br>"  + new Date()  + "<br>"  + "<br>" + "El segundo comentario es : " + com2 + "<br>" + new Date()  + "<br>" + "<br>" + "El tercer comentario es : " + com3 + "<br>" + new Date()  + "<br>" + "<br>" + " El cuarto comentario es : " + com4  + "<br>" + new Date() + "<br>" + "<br>" + " El último comentario es : " + com5 + "<br>" + new Date())

/*/

/*/ 7 Pelicula Favorita 3

class 
Peliculas{

constructor(Nombre, Año, Director, Principales, Duración, Género){
     this.Nombre = Nombre;
     this.Año = Año;
     this.Director = Director;
     this.Principales = Principales;
     this.Duración = Duración;
     this.Género = Género;
     this.text = `Nombre: ${this.Nombre}, <br> Año: ${this.Año}, <br> Director: ${this.Director}, <br> Personajes principales: ${this.Principales}, <br> Duración: ${this.Duración}, <br> Género: ${this.Género} <br> <hr>` 
 }
 mostrar(){
     document.write(this.text)
 }
} 
var HalloweenKills = new Peliculas (" Halloween Kills", 2021, " David Gordon Green", " Michael Myers y Laurie Strode", " 1h 46m ", " Terror/Suspenso ");
var Superman = new Peliculas (" Superman", 2013, " Zack Snyder ", " Superman ", " 2h 23m ", " Acción/Aventura ");
var Venom = new Peliculas (" Venom", 2018, "Ruben Fleischer", " Eddie y Venom ", " 2h 20m ", " Acción/Ciencia ficción ");
var AvengerEndgame = new Peliculas (" Avengers: Endgame ", 2019, "Anthony y Joe Russo", " Thor, Capitán América , Iron-Man ", " 3h 2m ", " Acción/Ciencia ficción  ");
var SpiderMan3  = new Peliculas (" Spider-Man: No Way Home ", 2021, " Jon Watts ", " Spiderman ", " Aún no definida ", " Acción/Aventura ");

AvengerEndgame.mostrar();
HalloweenKills.mostrar();
SpiderMan3.mostrar();
Superman.mostrar();
Venom.mostrar();



var movies = [HalloweenKills, Superman, Venom , AvengerEndgame , SpiderMan3]

movies.sort();

/*/

