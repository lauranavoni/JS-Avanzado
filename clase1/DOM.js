//document object model
//var titulo = document.getElementsByTagName("h1");
//titulo.

//console.log(document.getElementById("titulo_principal"));
var primer_titulo = document.getElementsByClassName("titulo")[1];
console.log(primer_titulo);

primer_titulo.align = "center";
primer_titulo.innerHTML = "hola JS";

//console.log(document.getElementsByTagName("h2"));
/*metodos para agregar elementos
document.createElement
document.appendChild
document.removeChild
*/

var parrafo = document.createElement ("p");
parrafo.innerText = "independiente soy yo";
console.log(parrafo);

var cuerpo = document.getElementsByTagName("body")[0];
cuerpo.appendChild(parrafo);


