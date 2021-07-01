/*
Intercambiar las URLs de los links de la barra de navegación. El que dice Google! tiene que
redirigir a educacionit.com y viceversa.
*/

let enlaces = document.querySelectorAll("a");
//console.log(enlaces);

let temporal = enlaces[0].href;

enlaces[0].href = enlaces[1];
enlaces[1].href = temporal;