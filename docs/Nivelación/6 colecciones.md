# Colecciones

## Arreglos

Representa un conjunto de datos de un tipo en común. Pueden tener varias dimensiones

```javascript
// Lista
const personajes = ['link', 'zelda', 'ganondorf']

const link = personajes.find(personaje => personaje == 'link');

// Matriz
const matriz = [
    [1,2,3,4],
    [3,2,4,5],
    [9,7,6,3]
];

matriz[0][0] // 1
matriz[2][1] // 7

// Plano tridimensional
const r3 = [
    [
        [0,0,0,0]
        [0,0,0,0]
        [0,0,0,0]
    ],[
        [0,0,0,0]
        [0,1,0,0]
        [0,0,0,0]
    ],[
        [0,0,0,0]
        [0,0,3,0]
        [3,0,0,0]
    ]
];
```

También se puede utilizar un objeto como un conjunto de propiedades con un identificador

```javascript
const nivelDeDestreza = {
    espada: 5,
    arco_flecha: 8,
    escudo: 3,
    daga: 15
};

nivelDeDestreza.espada++;
// nivelDeDestreza.espada == 6
```

## Iteración de colecciones

La iteración o procesamiento de colecciones son un imán de bloques imperativos, como ciclos `for`. Por eso se recomienda utilizar funciones más declarativas para iterar y procesar sus elementos.

### Foreach

Lo más parecido a un for común y corriente, itera cada elemento de la colección y aplica una función sobre éste. Retorna nulo.

```javascript
const asignaturas = [
    'cálculo 1',
    'Programación 1',
    'Taller de base de datos'];

// Ambas son válidas y funcionan *casi* igual. Para la mayoría de
// los casos de uso, se utiliza la primera versión.
asignaturas.forEach(asignatura => { console.log(asignatura) });
asignaturas.forEach(console.log);
```

### Map

Aplica una función sobre cada elemento del arreglo y devuelve una colección de los elementos resultantes.

```javascript
const numeros = [1,2,3,4,5,6];

const numerosGrandes = numeros.map(n => n * 1000);
// [1000, 2000, 3000, 4000, 5000, 6000]

const doblar = n => 2 * n;

const numerosDoblados = numeros.map(doblar);
// [2, 4, 6, 8, 10, 12]
```

### Reduce

Aplica una función acumulativa sobre los elementos de la colección.

```javascript
const misCalificaciones = [
    {peso: 30, nota: 5.0},
    {peso: 25, nota: 6.0},
    {peso: 25, nota: 4.8},
    {peso: 20, nota: 5.7},
];

const calcularPuntaje = (calificacion) =>
    calificacion * peso / 100

const notaPresentacion = misCalificaciones
    .map(calcularPuntaje)
    .reduce((total, actual) => total += actual);
```

Existen más funciones sobre aplicables a las colecciones. La API de Array.prototype tiene todas definidas y explicadas