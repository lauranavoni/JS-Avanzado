/*
Realizar la misma operación que en el punto uno, pero ahora para el <ul> que ya se encuentra
en el <body>. Recordar que no se puede hacer múltiples appendChild a un nodo.
*/

let contenido = document.createDocumentFragment();

//let lista = document.getElementById("lista_estatica");

for(let i = 0; i < 10; i++){
    let elemento_lista = document.createElement("li");
    elemento_lista.innerText = "elemento " + i;
    contenido.appendChild(elemento_lista);
}
document.querySelector("#lista_estatica").appendChild(contenido);