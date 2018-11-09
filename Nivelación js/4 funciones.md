# Funciones

## Declaración

```javascript
function mifuncion(parametro) {
    /*
    ...
    */
    return resultado
}
```

## Asignación como expresión

Las funciones también se pueden declarar como una expresión

```javascript
const mifuncion = function(parametro) {
    /* ... */
    return resultado;
}
```

La diferencia entre ambas es que la segunda no es afectada por el *Hoisting* que implementa javascript. Pero, ¿Qué implica el hoisting?

## Funciones lambda o *arrow functions*

Son funciones anónimas (son asignadas, no declaradas). Permiten declarar pequeñas funcionalidades del sistema para hacer el código más declarativo.

```javascript
function miFuncion(parametro) {
    return parametro + 1
}

const miFuncionLambda = (parametro) => parametro + 1;

const lambdaSinParametros = () => 'hola mundo';
```

Tema de pérdida de this.