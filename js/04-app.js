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