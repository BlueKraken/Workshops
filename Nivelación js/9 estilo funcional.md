# Estilo funcional

La programación funcional es un paradigma que sigue las siguientes reglas:

* Todos los datos son inmutables: Las funciones retornan un resultado independiente, no la mutación de los datos de entrada.
* Todas las funciones son puras: Las funciones sólo pueden llamar a funciones puras para obtener un resultado dentro de ella.

Esto implica que **no es posible** sufrir efectos secundarios al utilizar funciones bajo este paradigma. Además, las funciones son **indempotentes**.

Ejemplo

```javascript
let minumero = 4;
// función impura, minumero puede cambiar por factores
// externos, lo que la hace indempotenete
const sumarMinumero = (n) => minumero + n;

sumarMinumero(3); // => 7;
cambiarMinumero();
sumarMinumero(3); // => ????

// función pura, no utiliza ningún recurso externo
const sumar = (a, b) => a + b;

sumar(2, 5) // => 7, y siempre será 7, ergo, es indempotente.

const restar = (a, b) => sumar(a, -b);
// ya que sumar es pura, restar lo es aún cuando utiliza
// un recurso externo.
```

Hay técnicas especializadas en la composición de funciones para poder realizar operaciones complejas sobre datos sin perder los fundamentos de éste paradigma. Es una materia bastante compleja y que demanda lectura y estudio, y dado que vamos a utilizar un **estilo funcional** y no un paradigma completo funcional (como utilizar F# o Haslell), hablaremos de las aplicaciones que podríamos adoptar de este estilo.

## Definición de funciones puras

En el caso de programar una libreta de notas, debería existir una función `calcularPromedio`. Esta debe ser una función pura, ya que sin importar cuándo no cómo, debería retornar el mismo promedio dadas las mismas notas.

```javascript
const calcularPromedio = (...notas) =>
    return notas.reduce((total, actual) => total += actual) / notas.length;
```

Si quisiéramos, ahora, reaccionar a un promedio rojo, podríamos pensar que esta es una buena opción

```javascript
function calcularPromedio(...notas) {
    const promedio =
        notas.reduce((total, actual) => total += actual) / notas.length;

    if (promedio < 4) {
        /* ... */
        enviarNotificacion(EstadoAcademico.Reprobado);
    } else {
        /* ... */
        enviarNotificacion(EstadoAcademico.Aprobado);
    }
}
```

El problema con esta solución es que `calcularPromedio` pierde su integridad. `calcularPromedio` debe hacer eso y sólo eso, calcular el promedio, nada más ni nada menos. Hay que evitar hacer trabajos implícitos o no esperables. Dicho de otra manera: ¿Por qué el método calcularPromedio va a notificar de alguna manera a algun actor del sistema cuando claramente debe sólo calcular el promedio?

Una solución más ad-oc sería la siguiente:

```javascript
const calcularPromedio = (...notas) =>
    const promedio =
        notas.reduce((total, actual) => total += actual) / notas.length;

// no tiene por que se una función pura
const manejarPromedio = (alumno) => {
    const promedio = calcularPromedio(alumno.notas);

    if (promedio < 4) {
        /* ... */
        enviarNotificacion(EstadoAcademico.Reprobado);
    } else {
        /* ... */
        enviarNotificacion(EstadoAcademico.Aprobado);
    }
}
```

De esta manera, la función `calcularPromedio` no pierde su integridad, sigue haciendo exactamente lo que uno espera al leer su declaración. Dejando que la función llamada `manejarPromedio` reaccione al promedio del alumno.