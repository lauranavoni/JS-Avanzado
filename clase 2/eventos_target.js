let boton = document.querySelector("button");
/*modifico para propagacion
boton.addEventListener("click", function(e){
    console.log(e);
})
*/
boton.addEventListener("click", function(){
 var boton_ejecucion = document.createElement("button");
 boton_ejecucion.innerText = "Boton creado en tiempo de ejecucion";
 boton_ejecucion.id="ejecucion";
 document.body.appendChild(boton_ejecucion);
})

/*var ejecucion =document.getElementById("ejecucion");
ejecucion.addEventListener("click",function(){
    console.log("disparado por boton creado");
})
*/

document.addEventListener("click", function(e){
    console.log(e.target.id)
    if(e.target.id == "ejecucion"){
        console.log("boton creado en tiempo de ejecucion");
    }
})


//propagacion de eventos

var grande = document.getElementById("grande");
var mediano = document.getElementById("mediano");
var chico = document.getElementById("chico");

chico.addEventListener("click",function() {
    console.log("Div chico");
})


grande.addEventListener("click",function() {
    console.log("Div grande");
})



var enlace = document.getElementById("link_goo");
enlace.addEventListener("click", function(e){
    //console.log("click");
    e.preventDefault(); // evita ejecutar los metodos predeterminados dentro de un script... prevendefault
    console.log("click");
})

var parrafo = document.getElementById("parrafo");

window.addEventListener("resize",function(){
    console.log("cambio de tamaño");
    parrafo.innerText = "el tamaño de la ventana es  de "+ window.outerWidth + "  px de ancho y  "+ window.outerHeight+ " px de alto.";
})
