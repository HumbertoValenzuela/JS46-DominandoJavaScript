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