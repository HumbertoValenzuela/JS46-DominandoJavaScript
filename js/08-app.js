// 8. Qué es self
// self se refiere a la ventana global y es igual a window
// self se utliza mucho en los ServiceWorkers webWorker
// En un ServiceWorkers no esta la palabra reservada window pero
// se utiliza self

// Colocar en chrome
const win = window === self;
console.log(win);// true
const win2 = window.self === self;
console.log(win2);// true

// -------------------------------------
// window y self arrojan el mismo resultado
window.onload = () => {
    console.log('Ventana Lista');
}

self.onload = () => {
    console.log('Ventana Lista');
}
// -------------------------------------
// Utilizando this.
const producto = {
    nombre: 'Notebook Asus',
    precio: 1000,
    disponible: true,
    mostrarInfo: function() {
        return `El producto: ${this.nombre} tiene un precio de ${this.precio}`
    }
}
// Llamar mostrarInfo
console.log(producto.mostrarInfo());
// -------------------------------------
// Utilizando self.
const producto2 = {
    nombre: 'Refrigerador',
    precio: 1500,
    disponible: true,
    mostrarInfo: function() {
        const self = this;
        return `El producto2: ${self.nombre}, el precio es: ${self.precio}`;
    }
}
console.log(producto2.mostrarInfo());

// Utilizando self.
// registremos nombre fuera del objeto, En la ventana global
window.nombre = 'Refrigerador';
const producto3 = {
   
    precio: 1500,
    disponible: true,
    mostrarInfo: function() {
        // const self = this;
        return `El producto2: ${self.nombre}, el precio es: ${self.precio}`;
    }
}
console.log(producto3.mostrarInfo());//Refrigerador y precio undefined