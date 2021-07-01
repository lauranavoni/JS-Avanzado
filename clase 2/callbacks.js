// es una funcion que se pasa o se manda como argumento a otra funcion. me permite llamar desde una funcion a otra funcion, se puede ejecutar despues q la otra funcion finalice

// callback
/*
1.es una funcion que es pasada como parametro a otra funcion
2.es una tecnica. va a permitir que una funcion llame a otra funcion
3.una funcion callback pueda ejecutarse despues que finalice la funcion interna/contenida.
*/

// ALERT es una funcion del elemento window
// void vacio, arroja un varlo hacia afuera
// no puedo asignar a una variable el resultado de un procedimiento porque no retorna nada = void/una funcion si 

// eventos(contraro/acuerdo) cualquier cosa q suceda a nivel de pagina, evento click por ejemplo (alert)
//nombre del evento
//estructura del evento
// y objeto del evento (registra la funcion oyente/manejador)
/*
var nombre = window.prompt("Escribi tu nombre");
if( nombre == " Ariel"){
 alert("el nombre es  "+ nombre);
}
else{
    alert("el nombre es desconocido ");
}

//var alumno = alert(nombre);
alert(alumno);
*/

//listener (oyente)
//handler (manipular, manejador)

/*let boton = document.querySelector("button");
//boton.onclick = console.log("evento click del boton");

//boton.onclick = mifuncion;
// asociar el evento/ propiedad click a una funcion anonima
/*
boton.onclick = function (){
    console.log('evento click en el boton');
}
*/
/*function f_ejemplo (){
    console.log("funcion de ejemplo");
}

/*boton.onclick = f_ejemplo;

// asociar el evento usando listener

boton.addEventListener("click", function(){
    console.log('evento click en el boton');
})

boton.addEventListener("dblclick", f_ejemplo);
*/

