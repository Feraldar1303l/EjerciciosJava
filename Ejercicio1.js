// Escribir una función llamada contrasenaValida que reciba un string y retorne true si el string es igual a "2Fj(jjbFsuj" o "eoZiugBf&g9". De lo contrario debe retornar false.


const contrasena1 = "2Fj(jjbFsuj" // true
const contrasena2 = "eoZiugBf&g9"// true

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });


const contrasenaValida = (pass) => {
    if(pass === contrasena1 || pass === contrasena2){
        console.log(true)
    } else {
        console.log("That is not the password")
        console.log(false)
    }
}

readline.question("What is the password?", input =>{
    contrasenaValida(input);
    readline.close();
})