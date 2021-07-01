/*Crear una lista desordenada con 10 elementos dentro usando un bucle for. Tener en cuenta que
solo se le puede hacer un único appendChild al ul creado, asi minimizamos el tiempo de
modificaciones en el DOM.
*/

let lista_desordenada = document.createElement("ul");

for(let i =0; i < 10; i++){
    let list_item = document.createElement("li");
    list_item.innerText = "item "+ i;
    lista_desordenada.appendChild(list_item);
}
//console.log(lista_desordenada);

var cuerpo = document.getElementsByTagName("body")[0];
cuerpo.appendChild(lista_desordenada);

