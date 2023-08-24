class Forma {
    constructor(public ancho: number, public alto: number) {}
}

class Rectangulo extends Forma {
    constructor(ancho: number, alto: number) {
        super(ancho, alto);
    }

    calcularArea(): number {
        return this.ancho * this.alto;
    }
}

class Triangulo extends Forma {
    constructor(base: number, altura: number) {
        super(base, altura);
    }

    calcularArea(): number {
        return (this.ancho * this.alto) / 2;
    }
}


const rectangulo = new Rectangulo(5, 10);
console.log("Área del rectángulo:", rectangulo.calcularArea());

const triangulo = new Triangulo(6, 8);
console.log("Área del triángulo:", triangulo.calcularArea());
