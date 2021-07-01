// funciones

//function suma(){
    //}

//var multiplicar = function (){
    //}
/*
var restar = (param) => {
    console.log(param);
}
*/
/*
var restar = param => {
    console.log(param);
}
*/
var multiplicar = function (parametro){
    return parametro *2;
}
var sumar = function(parametro){
    return 100+ multiplicar(parametro);
}
var sumar1 = function (param1, param2){
    return param1 + multiplicar(param2);
}
// var numero = sumar1 (1544.1567);
// var numero = sumar1 (100, multiplicar(18));
// var numero = sumar1(100,(150-78));

// a continuacion se producen errores
var sumar2 = function(parametro){
    return 100+ console.log(multiplicar(parametro));
}