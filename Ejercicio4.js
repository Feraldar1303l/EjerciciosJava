// Escribir una función llamada imprimirArreglo que reciba un arreglo e imprima cada elemento en una línea a parte:

// escribe tu respuesta acá

// código de prueba
// console.log(imprimirArreglo(1, "Hola", 2, "Mundo"))
// 1
// Hola
// 2
// Mundo

// Respuesta 1
// const imprimirArreglo = (array1, array2, array3, array4) => console.log(`${array1}\n${array2}\n${array3}\n${array4}\n`)
// imprimirArreglo(1,"Fer","hola","cinco");

var numArray;
var arreglos = [];

process.stdout.write("Numero de arreglos en total: ");
process.stdin.on('data',function(data){
    numArray=data.toString().trim();
    process.exit();
});

process.stdin.on('data',function(data){
    process.stdout.write(`Escribe el arreglo numero${(respuesta.lenght)+1}`);
    if (arreglos.length<numArray){
        respuesta.push(data.toString().trim())
    }
        process.exit();
});
