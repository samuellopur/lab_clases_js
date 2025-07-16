//! Clase Figura
class Figura {
  constructor(color) {
    this.color = color;
  }

  area() {
    return 0;
  }
}

//! Clase Rectangulo
class Rectangulo extends Figura {
  constructor(color, base, altura) {
    super(color);
    this.base = base;
    this.altura = altura;
  }

  area() {
    return this.base * this.altura;
  }
}

//! Clase Circulo
class Circulo extends Figura {
  constructor(color, radio) {
    super(color);
    this.radio = radio;
  }

  area() {
    return Math.PI * this.radio * this.radio;
  }
}

//! Instancias
const rectangulo = new Rectangulo("Gris", 5, 10);
console.log(`El área del rectángulo (${rectangulo.color}) es: ${rectangulo.area()}`);

const circulo = new Circulo("Naranja", 3);
console.log(`El área del círculo (${circulo.color}) es: ${circulo.area().toFixed(2)}`);



