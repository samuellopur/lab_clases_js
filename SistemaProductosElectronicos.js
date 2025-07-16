//! Clase base Producto
class Producto {
  constructor(nombre, precio, marca) {
    this.nombre = nombre;
    this.precio = precio;
    this.marca = marca;
  }

  descripcion() {
    return `Producto: ${this.nombre}, Precio: $${this.precio}, Marca: ${this.marca}`;
  }
}

//! Clase Telefono
class Telefono extends Producto {
  constructor(nombre, precio, marca, almacenamiento, ram) {
    super(nombre, precio, marca);
    this.almacenamiento = almacenamiento;
    this.ram = ram;
  }

  descripcion() {
    return `${super.descripcion()}, Almacenamiento: ${this.almacenamiento}GB, RAM: ${this.ram}GB`;
  }
}

//! Clase Laptop
class Laptop extends Producto {
  constructor(nombre, precio, marca, procesador, pulgadas) {
    super(nombre, precio, marca);
    this.procesador = procesador;
    this.pulgadas = pulgadas;
  }

  descripcion() {
    return `${super.descripcion()}, Procesador: ${this.procesador}, Pantalla: ${this.pulgadas}"`;
  }
}

//! Crear instancias
console.log(`
-------------------------------------------------------------
************************* Teléfonos *************************
-------------------------------------------------------------`)
const telefono = new Telefono("C55", 800, "Realme", 256, 16);
console.log(telefono.descripcion());

const telefono1 = new Telefono("14", 1600, "Iphone", 256, 32);
console.log(telefono1.descripcion());

console.log(`
-------------------------------------------------------------
************************* Laptops *************************
-------------------------------------------------------------`)
const laptop = new Laptop("X415E", 1800, "Asus", "Core i7", 17);
console.log(laptop.descripcion());

const laptop1 = new Laptop("MacBook Pro", 1800, "Apple", "M4 Max", 15);
console.log(laptop1.descripcion());


