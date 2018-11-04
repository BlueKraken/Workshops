// Se requiere diseñar las clases bases para armas cortantes y armas contundentes.
// La única restricción es que si en el futuro se desea modificar un arma, la
// modificación se debe realizar en 2 clases como máximo

//Primera version:
class ArmaCortante {
    nombre: string;
    danio: number;
    tipoDanio: string;

    constructor(nombre, danio) {
        this.nombre = nombre;
        this.danio = danio;
        this.tipoDanio = 'Cortante'
    }
}

class ArmaContundente {
    nombre: string;
    danio: number;
    tipoDanio: string;

    constructor(nombre, danio) {
        this.nombre = nombre;
        this.danio = danio;
        this.tipoDanio = 'Contundente'
    }
}

enum TipoDanio
{
    Contundente = 'contundente',
    Cortante = 'cortante',
}

class Arma {
    nombre: string;
    danio: number;
    tipoDanio: TipoDanio;

    constructor(nombre: string, danio: number, tipoDanio: TipoDanio) {
        this.nombre = nombre;
        this.danio = danio;
        this.tipoDanio = tipoDanio;
    }
}

class Espada extends Arma {
    constructor(nombre, danio) {
        super(nombre, danio, TipoDanio.Cortante); // necesario para llamar al constructor de Arma
    }
}

class Maza extends Arma {
    constructor(nombre, danio) {
        super(nombre, danio, TipoDanio.Contundente)
    }
}