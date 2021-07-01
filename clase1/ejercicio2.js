/*Hacer que el <article> con id "movil" solamente se vea si la página se carga a menos de 500px
*/

let articulo = document.querySelector("#movil");

if(window.outerWidth < 500){
    document.querySelector("#movil").style.display = 'none';
}