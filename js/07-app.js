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