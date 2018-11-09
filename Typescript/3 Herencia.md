# Herencia

Cuando una clase hija es construida, esta DEBE llamar al constructor de la clase padre, entregándole todos los parámetros necesarios para que la construcción de la base sea correcta.

```typescript
class Asiento {
    nombre: string;

    constructor(nombre: string) {
        this.nombre = nombre;
    }
}

class Silla {
    cantidadPatas: string;

    constructor(nombre: string, cantidadPatas: number) {
        // Super corresponde a la llamada al constructor padre de la clase.
        // En este caso Asiento.constructor(nombre)
        super(nombre);
        this.material = material;
    }
}

const miSilla = new Silla('Silla de madera', 4);

console.log(miSilla.nombre) // Silla de madera
```