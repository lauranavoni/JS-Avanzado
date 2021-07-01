// browser object model << alcance global
// tipos de datos primitivos
//number
//null (desconocido) valor nulo
//boolean
//string
//undefined
//let a = 10;
//let b = a;
var a = 10;
var b = a;

a = 250;
console.log(a);
console.log(b);


// tipos de datos object
//objetos{indice: valor}
//arrays[valor]
//function

//pasar valor por referencia
var arrays = [3,64,7];
var copia_arrays = arrays;
arrays[0]=157;

console.log(arrays);
console.log(copia_arrays);