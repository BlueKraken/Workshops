# Diccionarios

LLamamos diccionario a una colección de recursos que no cambiará durante la ejecución del programa. Como los nombres de los días de semana, o tipos de ataque existentes.

```javascript
// Para procurar que el objeto no pueda ser modificado, lo "congelamos"
const DiaDeSemana = Object.freeze({
    lunes: 'lunes',
    martes: 'martes',
    miercoles: 'miércoles',
    jueves: 'jueves',
    viernes: 'viernes'
});
```

Si vemos un diccionario como un almacén de conceptos o descripciones, muchas cosas pueden ser un diccionario. En cada lenguaje o mesa de trabajo (*framework*) existen preferencias por la comunidad y/o caso de uso para definir un diccionario, pocas veces hay una manera *correcta* de hacerlo. En javascript podemos utilizar:

## Colección simple

```javascript
const elementos = Object.freeze([
    {nombre: 'fuego'},
    {nombre: 'tierra'},
    {nombre: 'agua'},
    {nombre: 'aire'}
]);

const elementoFuego = elementos[0];
const elementoAgua = elementos.find(e => e.nombre == 'agua');
```

## Objeto

```javascript
const elementos = Object.freeze({
    fuego: {nombre: 'fuego'},
    tierra: {nombre: 'tierra'},
    agua: {nombre: 'agua'},
    aire: {nombre: 'aire'}
});

const elementoFuego = elementos.fuego;
const elementoAgua = elementos['agua'];
```

## Lista no almacenada

```javascript
const FUEGO = Object.freeze({nombre: 'fuego'});
const TIERRA = Object.freeze({nombre: 'tierra'});
const AGUA = Object.freeze({nombre: 'agua'});
const AIRE = Object.freeze({nombre: 'aire'});
```

## Conclusiones

Herramienta|Observaciones|Conclusión
--|--|--
Colección simple|Difícil de buscar y chequear conceptos|Evitar uso
Objeto|Fácil de buscar y chequear conceptos, pero su uso es demandante cuando se trata de diccionarios muy grandes|Utilizar en la mayoría de casos de uso
Lista no almacenada|Cada concepto es independiente, lo cual ayuda a su manejo, pero implica importar o buscar elementos que no tienen relación lógica entre ellos|Utilizar para diccionarios grandes (cientos de conceptos)