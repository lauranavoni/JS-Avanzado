- poner todos los inputs o elemnetos del mismo type un array

recorrer el array y por cada elemento evaluar su value o pasar ese value como argumento a un eventual funcion de validacion

-esa funcion si detecta algun dato no valido deberia devolver false


function validar (param){
    var mail = document.getdocumentby("email").value;

    let arroba = mail.indexof("@");
    let punto = mail.lastindexof(".");
    let extension = mail.split (".").[1];

    if (arroba < 1 || (punto- arroba <2) || mail ===""){
        // alert ("invalido");
    }
    else{
        if( extension.lenght > 3){
            // alert ("invalido");
            return;
        }
        alert (valido);
    }
}