/*var edad =18;
if (edad >= 18) {
    permitido
}
else
{
    no permitido
}

if (edad < 18) {
    no permitido
}
else
{
    permitido
}

if (function ()== false {
    //
})
*/

/*var formulario = document.getElementById("formulario");
/*
var boton = document.getElementById("enviar");

boton.addEventListener("click", function(){
    console.log("enviando...");
})
*/
/*
formulario.addEventListener("submit", function (e){
    e.preventDefault();
    console.log("click del boton");
})
*/
var entrada = document.getElementById("entrada");
/*
var boton = document.getElementById("enviar");

boton.addEventListener("click", function(){
    // checkvalidity ();
    console.log(entrada.checkValidity());
})
*/
formulario.addEventListener("submit", function(e){
    e.preventDefault();
    var dato = entrada.value;
    var largo_texto = dato.lenght;
    var largo_trim = dato.trim();
    //includes () - indexOf()
    console.log(largo_texto.lenght);
    console.log(largo_trim.includes(""));
    console.log(encodeURI)

    if(largo_trim.includes("")){
        console.log("existen caracteres en blanco");
    }




    
/*
if (largo_texto >= 3){
        console.log ("valido");
    }
    else{
        //console.log("invalido");
        entrada.setCustomValidity("el nombre no puede tener al menos 3 letras o estar vacio");
    }
*/
    
    //console.log("click del boton");



