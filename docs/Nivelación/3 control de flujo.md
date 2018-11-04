# Control de flujo

## Operadores lógicos

Nombre | Símbolo
-- | --
Igual|==
Distinto|!==
Igual estricto|===
Distinto estricto|===
Mayor a|>
Menor a|<
Mayor o igual a |>=
Menor o igual a |<=
Y|&&
Ó|\|\||

En javascript, ciertas comparaciones pueden resultar `true` o `false` cuando a simple vista no debería. Esto pasa porque el intérprete de javascript toma en cuenta como igual a ciertos casos especiales. Por esto se recomienda siempre utilizar `===` o `!==`. [Tabla de equidad](https://dorey.github.io/JavaScript-Equality-Table/)

Por ejemplo:

```javascript
console.log(true == "true") // true
console.log(true === "true") // false

console.log(0 == "0") // true
console.log(0 === "0") // false

console.log(true == 1) // true
console.log(true === 1) // false

console.log(false == 0) // true
console.log(false === 0) // false

```

## If, else

```javascript
if (condicion) {
    hacerAlgo();

} else if (otraCondicion) {
    hacerOtraCosa();

} else {
    hacerAlgoDistinto();
}
```

## For

```javascript
for (let i = 0; i < 5; i++) {
    console.log(`i es ${i}`)
}
// i es 0
// i es 1
// i es 2
// i es 3
// i es 4
```

## For in

```javascript
const nombres = ['juan', 'marco', 'maría'];

for(let nombre in nombres) {
    console.log(nombre);
}
// juan
// marco
// maría
```

## While

```javascript
while (algo == true) {
    procesarAlgo(algo);
}
```