// 2. Hoisting
// Es para referirse a como funcionan los contextos de ejecución en
// JS, fase creación y una fase de ejecución
// JS se ejecuta en dos partes. Se crean y se registran todas las
//  variables y en la segunda se ejecutan

// Diferencia entre function expression y function declaration


// Function declaration. 
// Declaration se puede llamar antes o despúes. Pasa porque JS registra 
// las funciones y variables y la segunda las llama
obtenerCliente('Hu');//funciona
function obtenerCliente(nombre) {
    console.log(`El nombre del cliente es ${nombre}`);
}
// obtenerCliente('Hu'); funciona


// function expression
// Al llamar antes en una function expresssion no funciona, porque si 
// observa tiene una sintaxis de variable. La función no se creo ni registro
try {
    obtenerCliente2('VA');//Cannot access 'obtenerCliente2' before initialization
    const obtenerCliente2 = function(apellido) {
        console.log(`El apellido del cliente es ${apellido}`);
    }
   // obtenerCliente2('VA');//Funciona
} catch (error) {
    console.log(error);
}
