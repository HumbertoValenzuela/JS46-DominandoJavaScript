// 6. new Binding

/** También cuando creas un nuevo objeto con el object constructor tienes acceso a la palabra this via un nuevo objeto con new */

function Auto(modelo, color) {
    // this. es el new Binding
    this.modelo = modelo;
    this.color = color;
}

// Crear un nuevo objeto utilizando el object constructor
// ¿Cómo almacena estos valores dentro del objeto de auto?
// Utilizando this. Cada vez que se crea un objeto se tiene acceso al new
// Binding(this.)
const auto = new Auto('Camara', 'Negro');
console.log(auto);// se obtiene un tipo de objeto llamado Auto, con el modelo y color

try {
    function hola(){
        console.log(color);// indica color no esta definido
    }
    hola();
} catch (error) {
    console.log(error);
}


// una variable a la ventana global
// Window binding
// window es la ventana global
window.winBinding = 'negro';
function windowBinding(){
    console.log(winBinding);
}
windowBinding();