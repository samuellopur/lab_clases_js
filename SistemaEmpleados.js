//! Clase Empleado

class Empleado{
    constructor(nombre, edad, salarioBase){
        this.nombre = nombre;
        this.edad = edad;
        this.salarioBase = salarioBase;
    }

    calcularSalario(){
        return this.salarioBase;
    }
}

//! Clase Gerente

class Gerente extends Empleado{
    constructor(nombre, edad, salarioBase, bonificacion){
        super(nombre, edad, salarioBase);
        this.bonificacion = bonificacion;
    }

    calcularSalario(){
        return this.salarioBase + this.bonificacion;
    }
}

//! Clase Desarrollador

class Desarrollador extends Empleado{
    constructor(nombre, edad, salarioBase, lenguaje){
        super(nombre, edad, salarioBase);
        this.lenguaje = lenguaje;
    }

    calcularSalario(){
        return this.salarioBase;
    }
}

//! Instancias

console.log(`
-----------------------------------------------------------
******************** Sistema Empleados ********************
-----------------------------------------------------------`)
const empleado = new Empleado("Carlos", 30, 1000);
console.log(`${empleado.nombre} tiene un salario de: $${empleado.calcularSalario()}`);

const gerente = new Gerente("Samuel", 35, 150000, 1500)
console.log(`${gerente.nombre} tiene un salario de: $${gerente.calcularSalario()}`);

const desarrollador = new Desarrollador("Ana", 25, 1500, "JavaScript");
console.log(`${desarrollador.nombre} tiene un salario de: $${desarrollador.calcularSalario()}`);
