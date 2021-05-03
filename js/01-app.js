// 1. Scope
// Es el alcance de una variable. Que puede ser vista por una función o
// un bloque de código
//  En una función o bloque de código:

 // Scope Global: 
const cliente = 'Juan'; //Scope Global. Variable Global

function mostrarCliente() {
    console.log(cliente);// Muestra 'Juan'}
}
mostrarCliente();

// Pero si la const cliente esta dentro de la función y el console.log
// esta por fuera, esto no funcionará. Porque el scope de la variable
// se encuentra dentro de la función
try {
    function mostrarEmpresa() {
        const empresa = 'Juan'; 
    }
    mostrarEmpresa();
    console.log(empresa);// empresa is not defined
} catch (error) {
    console.log(error);
}

// Repetir una variable dentro del Scope, no se permite. Da error 
// indicando que la variable fue declarada.


