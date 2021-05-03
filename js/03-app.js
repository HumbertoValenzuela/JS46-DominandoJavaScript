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