// El índice de masa corporal (IMC), o BMI por sus siglas en inglés, es un valor que determina la cantidad de grasa de una persona.

// El BMI se calcula con la siguiente formula: peso / altura^2

// Escribir una función llamada bmi que reciba dos argumentos: peso y altura, y retorne un string con las siguientes posibilidades:

// "Bajo de peso" si el BMI < 18.5
// "Normal" si está entre 18.5 y 24.9
// "Sobrepeso" si está entre 25 y 29.9
// "Obeso" si es igual o mayor a 30

// function imc(peso, altura){
//     const bmi = peso / (altura*altura)
//     console.log(`Tu indice de masa corporal es: ${bmi}`)
// }

const imc = (peso, altura) => peso / (altura*altura);

console.log(imc(75,1.73))