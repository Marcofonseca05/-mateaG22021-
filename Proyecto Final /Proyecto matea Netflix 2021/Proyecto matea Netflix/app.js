//baner


//pablin
function traerPeliculas() {
  fetch("peliculas.json")
    .then(respuesta => respuesta.json())
    .then(datosEst => {
      escribe = ``
      console.log("dataEst", datosEst);
      for (peli of datosEst.pelis) {
        document.getElementById("acaPostre").innerHTML = escribe +=
          `<div class='col-4'>
                  <img src='${peli.imagen}'  style='width:200px; height: 200px'>
                  <h3>${peli.nombre}</h3> 
              </div>`
      }
      //mostrarPeliculas(datosEst);
    }).catch(error => {
      console.log("Error", error.message);
    });

};
//<p>${i.Rancking}</p>
traerPeliculas();

  
// Siguiente botón
///
/*function buscar(){
  var dato = document.getElementById("buscador").value.toLowerCase();
  fetch("peliculas.json")
  .then(response => response.json())
  .then(data =>{
    algo = ``
      for(peli of data.pelis){
        document.getElementById("aca").innerHTML = algo+=
        `<div class="col-6 col-sm-4 col-lg-2">
              <img class="card" src="${peli.imagen}" style="width:200px; height:200px;paddin:5px;margin:5px ">
              <h3>${peli.nombre}</h3>
              <h4>${peli.Lanzamiento}</h4>
              <h5>${peli.Director}</h5>
              <h6>${peli.genero}</h6>    
          </div>` 
        //var Titulo = peli.nombre
  }}).catch(console.log("errrrror"))

}
buscar();
document.getElementById("btn-buscar").addEventListener("click",buscar)*/

//buscador

