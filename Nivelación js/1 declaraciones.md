# Declaración de variables

Una variable es el conjunto de un nombre que se le da a la o las celdas de memoria que almacenan los datos asignados, y los datos asignados al nombre. Los datos almacenados pueden ser cualquier cosa (literalmente) y en javascript pueden mutar su tipo.

```javascript
var a = 5;
// nombre: a
// datos en memoria: 5
a = 'hola mundo';
// el intérprete acepta esta mutación del dato.
a = false;

console.log(a) // false;
```

## Tipos de declaraciones

```javascript
// variable que escapa el 'scope'
var mivariable = 8;

// variable que respeta el 'scope' en el que se encuentra
let variableRespetuosa = 10;
```

### `let` vs `var`, o por qué nunca se debe usar `var`

Antes de todo, es importante saber que este caso es propio de javascript.

Para entender la diferencia, es necesario entender que es 'scope', el cual corresponde al bloque lógico accesible por las variables, objetos y funciones

```javascript
function () {
    const constante = 10;

    for(/*...*/) {
        // el scope de las variables, funciones y objetos
        // definidas dentro del ciclo es el mismo ciclo.
        // Es decir, son accesibles sólo desde aqui. Pero
        // aquí se puede acceder al scope externo
        var sumaVar = 10 + constante;

        let suma = 5 + constante;
    }
    console.log(suma) // ReferenceError: suma is not defined
    console.log(variableVar) // 20
}
```

## Constantes

Las constantes no pueden ser reasignadas, pero sus propiedades si

```javascript
const arma = {
    nombre: 'arma cortante',
    danio: 5,
};

arma.danio = 10; // ok

arma = {
    nombre: 'arma cortante',
    danio: 10
} // TypeError: Assignment to constant variable.
```

Hay maneras de tener una "constante real", utilizando `Object.freeze()`

```javascript
const llamarada = Object.freeze({
    escuela: 'fuego',
    efecto: 'quemar',
    duracion: 3
});

llamarada.duración = 10 // TypeError: Assignment to constant variable.
```

## Hoisting

> "El concepto de Hoisting fue pensado como una manera general de referirse a cómo funcionan los contextos de  ejecución en JavaScript."
>
> [MDN web docs](https://developer.mozilla.org/es/docs/Glossary/Hoisting)

Veamos el siguiente ejemplo:

```javascript
const miconstante = recibirAlgo();

function recibirAlgo() {
    return 5;
}
```

`recibirAlgo()` es asignado en memoria antes de la ejecución del código, por lo que podemos usarla aún cuando se declara después de que se usa.

Este fenómeno actúa sobre las declaraciones, no asignaciones, por ejemplo:

```javascript
const miconstante = recibirAlgo(); // Reference Error, recibirAlgo() is not defined

const recibirAlgo = function() {
    return 5;
}
```

Dado que las clases en javascript corresponden a *sintaxis sugar* para declarar funciones con comportamiento, las **declaraciones** de clases también son *hoisteadas*

```javascript
class ClaseDeclarada() {
    /* ... */
}

const miClase = class ClaseAsignada() {
    /* ... */
}
```