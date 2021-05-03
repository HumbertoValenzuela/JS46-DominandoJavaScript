# JS46-DominandoJavaScript
JS 46-DominandoJavaScript
* 1 Scope
```javascript
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
```
* 2. Hoisting
```javascript
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
```

* 3. Coercion
```javascript
// 3. Coercion
// Conversión automática o implicita de valor de un tipo dado a otro

const numero1 = 20;
const numero2 = '40';

// Lo termina convirtiendo a numero1 en string. Esto es coerción implicita
console.log(numero1 + numero2);//2040

// Coerción Explicita. Por lo general requiere de una función
console.log(Number(numero2));//Lo convirtio a numero

// Coerción Explicita
console.log(numero1.toString());
```

* 4. Implicit Binding. Se da por implicito donde encontrar el valor
```javascript
// 4. Implicit Binding. Se da por implicito donde encontrar el valor
// Implicit Binding le dirá de una forma clara, con la palabra reservada
// this. donde se encuentra los valores

try {
    // Con la palabra reservada this. . Te dice que en este mismo objeto
    // encontraras los valores
    const usuario = {
        nombre: 'hum',
        edad: 39,
        informacion(){
            console.log(`Mi nombre es ${nombre} y mi edad ${edad}`);//nombre is not defined
        }
    }
    usuario.informacion();
} catch (error) {
    console.log(error);
}

try {
    // Con la palabra reservada this. . Te dice que en este mismo objeto
    // encontraras los valores
    const usuario = {
        nombre: 'hum',
        edad: 39,
        informacion(){
            console.log(`Mi nombre es ${this.nombre} y mi edad ${this.edad}`);//funciona agregando el this.
        },
        // Otro ejemplo
        mascota: {
            nombre: 'Hook',
            edad: 1,
            informacion() {
                console.log(`Mi nombre es ${this.nombre} y mi edad ${this.edad}`);
            }
        }
    }
    usuario.informacion();
    // LLamar a objeto mascota
    usuario.mascota.informacion();
} catch (error) {
    console.log(error);
}
```

* 5. Explicit Binding. Diferencia entre call, Apply y una bind
```javascript
// 5. Explicit Binding. Diferencia entre call, Apply y una bind
// Diferencia entre call, Apply y una bind
// call y apply ejecutan la función y retornan un resultado que podremos guardar
// Con bind lo que se guarda no es un resultado sino la propia función, y la podremos ejecutar en el futuro.

function persona(el1, el2) {
    console.log(`Mi nombre es ${this.nombre} y Escucho ${el1} y ${el2}`);
}

// Nombre se llama con el objeto informacion
const informacion = {
    nombre: 'Humberto'
}

// el1 y el2 cuando mandemos llamar esta función utilizando call
const musicaFavorita = ['hihop', 'electronic'];

// Aquí se ve la utilidad Explicit Binding. Porque no siempre tendrás
// toda la info en un solo lugar y vas a poder colocar un this.
// Sino que algunas veces tendrás que hacerlo de forma Explicit Binding
// Y para ella se utiliza una función llamada call. Call existe en todas
// las funciones de JS, incluso en las que tu creas.
// y puedes pasarle digamos un objeto o arreglo dentro de la función... MUY IMPORTANTE es que nota como el segundo argumento es un array, en .call tienes que pasar cada elemento del array de forma individual, con su posición...

persona.call(informacion, musicaFavorita[0], musicaFavorita[1]);

// Apply: Segunda forma para realizar Explicit Binding.
// Este es igual a .call, existe en todas las funciones pero toma un 
// array completo

persona.apply(informacion, musicaFavorita);

// .bind va a ser como .call en que le pasas cada argumento de forma
// individual, pero te crea una nueva función
const nuevaFn = persona.bind(informacion, musicaFavorita[0], musicaFavorita[1]);

nuevaFn();

// Estos 3, .call, .apply y .bind ya son temas más avanzados, pero los he visto en entrevistas de Desarrolladores JavaScript así que es importante que conozcas las diferencias.
```

* 6. new Binding
```javascript
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
```

* 7. Event Loop o Loop de Eventos en JS
```javascript
// 7. Event Loop o Loop de Eventos en JS

// El Código en JavaScript es como se dice, de un solo hilo, es decir, se ejecuta una linea, solo sucede una cosa a la vez y  cada que se va completando una, se manda llamar la otra, eso es el loop de eventos, piensa en el, como un while, que va ejcutando tareas mientras haya tareas disponibles

// Un Ejemplo de la vida real seria una fila en el cajero de tu banco, el cajero solamente puede despachar a una persona...

// Pero hay bancos que ofrecen a sus clientes especiales un servicio donde no hacen fila no, en JavaScript hay algo similar, hay eventos que tienen más prioridad que otros..

console.log("Primero");

setTimeout(function() {
    console.log("Segundo");
}, 0);

console.log("Tercero");

setTimeout(function() {
    console.log("Cuarto ");
}, 0);

new Promise(function(resolve) {
    resolve("5to ")
}).then(console.log);

console.log("Quinto!");
// El Event Loop esta revisando siempre por funciones que ejecutar, esas funciones pasan al stack, y una vez que se ejecutan, entonces comienza ir al queue y comienza a ejecutar esas funciones...

// Entonces se ejecutan todos los console log Primero, Tercero y Quinta.
// El Promise y los setTimeout quedan en el Queue.
// Luego el Promise pasa al Stack(tiene más prioridad) y se ejecuta. Luego Segundo y Cuarto

// Function tiene más prioridad que Promise, por tanto, function queda antes que Promise
function hola() {
    console.log('hola');
}
hola();
```

* 8. Qué es self
```javascript
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
```


