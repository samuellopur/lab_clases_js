class Vehiculo {
    constructor(marca, modelo, año){
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }

    obtenerDetalles(){
        return `Marca: ${this.marca}, Modelo: ${this.modelo}, Año: ${this.año}`;
    }

}

//! Clase Coche
class Coche extends Vehiculo{
    constructor(marca, modelo, año, numPuertas){
        super(marca,modelo, año);
        this.numPuertas = numPuertas;
    }

    obtenerDetalles(){
        return `${super.obtenerDetalles()}, Puertas: ${this.numPuertas}`;
    }
}


//! Clase Moto
class Moto extends Vehiculo{
    constructor(marca, modelo, año, cilindrada){
        super(marca, modelo, año)
        this.cilindrada = cilindrada;
    }

    obtenerDetalles(){
         return `${super.obtenerDetalles()}, Cilindrada: ${this.cilindrada} cc`;
    }
}


//! Instancias
console.log(`
-------------------------------------------------------------
************************* Vehiculos *************************
-------------------------------------------------------------`)

const coche = new Coche("Volswagen", "Jetta", 2025, 4);
console.log(coche.obtenerDetalles());
const coche1 = new Coche("Nissan", "Sentra", 2024, 4);
console.log(coche1.obtenerDetalles());


console.log(`
-------------------------------------------------------------
*************************** Motos ***************************
-------------------------------------------------------------`)
const moto = new Moto("Yamaha", "Fazer", 2023, 150);
console.log(moto.obtenerDetalles());
const moto1 = new Moto("Honda", "CBR", 2019, 150);
console.log(moto1.obtenerDetalles());