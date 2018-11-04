# Programación imperativa vs declarativa

* Expresión imperativa: Expresa qué se está haciendo con todos sus detalles y pasos necesarios. Deja de lado el **qué** y expresa del **cómo** se manejan los datos
* Expresión declarativa: Expresa la intención de lo que se va a hacer, no sus detalles ni los pasos exactos a seguir. Deja de lado el **cómo** y expresa el **qué** se hará con los datos.

Ejemplo: Se quiere obtener los talentos del personaje de id 5 y prepararlos para mostrarse en la lista de talentos de la UI.

## Estilo imperativo

```javascript
const personaje = Personajes.getPersonaje(5);

const talentosCurados = [];
for(let i = 0; i < personaje.talentos.length; i++) {
    const talentoCurado = `
        <p> ${talento.nombre} ${talento.tipo} </p>,
        <small> coste: ${talento.coste} </small>
    `;
    talentosCurados.push(talentoCurado);
}

mostrarLista(talentosCurados);
```

Se puede ver con detalle qué se está haciendo con la lista, cómo se está recorriendo, en que orden, que se hace en cada iteración, etc. Esto permite que la **intención** del bloque de código se pierda y deba ser interpretado por el desarrollador.

Se puede limpiar el código extrayendo la función `curarTalento(talento)`, pero sigue siendo dificil entender la intención del ciclo a primera vista.

```javascript

function curarTalento(talento) {
    return `<p> ${talento.nombre} ${talento.tipo} </p>,
        <small> coste: ${talento.coste} </small>`;
}

const personaje = Personajes.getPersonaje(5);

const talentosCurados = []
for(let i = 0; i < personaje.talentos.length; i++) {
    const talentoCurado = curarTalento(personaje.talentos[i]);
    talentosCurados.push(talentoCurado);
}
```

## Estilo declarativo

```javascript
const personaje = Personajes.getPersonaje(5);

const talentosCurados = personaje.talentos.map(talento =>
    `<p> ${talento.nombre} ${talento.tipo} </p>,
    <small> coste: ${talento.coste} </small>`);

mostrarLista(talentosCurados)
```

Si ahora extraemos la función `curarTalento(talento)`:

```javascript
function curarTalento(talento) {
    return `<p> ${talento.nombre} ${talento.tipo} </p>,
        <small> coste: ${talento.coste} </small>`;
}

const personaje = Personajes.getPersonaje(5)

const talentosCurados = personaje.talentos.map(talento => curarTalento(talento));

mostrarLista(talentosCurados);
```

Podemo refactorizar el código para hacerlo aún más declarativo

* pasando el talento a la función `curarTalento` implícitamente
* ahorrándonos la asignación de `personaje`
* dejando la función curarTalento en otro módulo e importándolo

```javascript
import { curarTalento } from './talentos/helpers.js';

const talentosCurados = Personajes
    .getPersonaje(5)
    .talentos
    .map(curarTalento);

mostrarLista(talentosCurados);
```

Se ve claramente como los talentos curados se obtienen de `Personajes`, obteniendo el con id 5 (`getPersonaje`), seleccionando los `talentos` de éste y procesando cada uno con la función `curarTalento`
