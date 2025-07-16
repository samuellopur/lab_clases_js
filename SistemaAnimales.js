//! Clase Animal
class Animal {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  emitirSonido() {
    console.log(`${this.nombre} hace un sonido.`);
  }
}

//! Clase Perro
class Perro extends Animal {
  emitirSonido() {
    console.log(`${this.nombre} dice: ¡Guau Guau!`);
  }
}

//! Clase Gato
class Gato extends Animal {
  emitirSonido() {
    console.log(`${this.nombre} dice: ¡Miau Miau!`);
  }
}

//! Instancias
const perro = new Perro("Firulais", 4);
perro.emitirSonido();
const perro1 = new Perro("Aslan", 7);
perro1.emitirSonido();


const gato = new Gato("Garfield", 3);
gato.emitirSonido();
const gato1 = new Gato("Tom", 5);
gato1.emitirSonido();


