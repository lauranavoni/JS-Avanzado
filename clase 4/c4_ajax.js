// sincronico y asincronico
// thread coleccion de operacion q esperan su turno para ser ejecutados ( se bloquea cuando es sincronico) tengo varios elementos de ejecucion
// thread=hilo de ejecucion=pila es una coleccion, un array (continene varios elementos principales)

/*
console.log("primero");
console.log("segundo");
console.log("tercero");
console.log("cuarto");

setTimeout(()=>{
    console.log("Ajax");
},2000);
// settimeout (es una pausa, que va a esperar q se ejecuta lo q tiene a continuacion, metodo asincronico, espera su turno, no esta bloqueado)
*/

// asincronous JAVASCRIPT and XML

//HTML ES UN SUBJUNTO DE XML, ES UNA FORMA DE DEFINIR ESTRUCTURAS, O TEXTO PLANO. protocolo http, me devuelve como resultado una pagina(solo eso)a apártir de eso se generan las cookies

//AJAX REFRESCOS PARCIALES DE PAGINA

//XHR XmlHttpRequest
let xhr = new XMLHttpRequest();
console.log(xhr.readyState);

// estado: xhr.readystate
/*
0 - cuando el objeto esta creado, esta instaciado
1 - "cuando el objeto este" configurado, si esta mal no va hacer nada, objeto con determinado metodo
2 - "" headers se enviaron y se recibieron (rta)
3 - ""descargando informacion (atraves del navegador)
4 - finalizado- con exito o no (404)
*/

// configuracion
// 2° argumento (contenido externo(absoluto) o interno(relativo))
// externo y absoluto: CORS- cross origin resourse sharing
xhr.open("get","archivo.txt");
console.log(xhr.readyState);

//despues de configurar va send
xhr.send();
console.log (xhr.readyState);

// console.log(xhr.response);
/*
setTimeout(()=> {
    console.log(xhr.response);
},1);
*/

xhr.addEventListener("readystatechange",()=>{
    console.log(xhr.readyState);
})

xhr.send();