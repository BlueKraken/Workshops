# Tipos primitivos

## strings

Se pueden definir con comillas simples o dobles

```javascript
const saludo = 'hola mundo';

const mensaje = "todo bien aquí";
```

## string literals (o templates)

Se definen con tíldes y acepta variables que son interpretadas en *runtime*. Los saltos de línea dentro de éstos son interpretados como se esperaría.

```javascript
let mensajeLargo = `
    String templates pueden ser usados para
    escribir mensajes de multiples líneas y
    acepta variables. Los saltos de línea se respetan.
`;

console.log(mensajeLargo)
// String templates pueden ser usados para
// escribir mensajes de multiples líneas y
// acepta variables. Los saltos de línea se respetan.

const saludo = (nombre) => `hola ${nombre}!`;

const mensaje = `${saludo('Gonzalo')}. Cómo estás?`;

const miboton = datos => `
    <button onclick="${datos.accion}">
        ${datos.nombre}
    </button>`;
```

## floats (todos los números en javascript son flotantes)

```javascript
let minumero = 0;
minumero = '10' * 2 // 20
minumero = 3 * '10'; // 30

```

## booleanos

```javascript
const esfalso = false

const esVerdadero = 10 < 30;
```