# Práctica 5 - Objetos, clases e interfaces

## Introducción
Durante la realización de esta práctica lo que haremos es familiarizarnos con la realización de ejercicios en código **TypeScript**, centrado en los **Objetos, clases e interfaces** en este lenguaje. Para empezar crearemos una estructura para nuestro proyecto y luego empezaremos a codificar los ejercicios que nos han propuesto.

## Antes de empezar.
Antes de empezar, hemos de crear la estructura. Para ello nos haremos los mismos pasos que llevamos haciendo durante el transcurso del tiempo, en bibliografía estarán los enlaces que hemos estado siguiendo.

## Lista de ejercicios.
- Ejercicio 1 - Pokedex
- Ejercicio 2 - Gestor bibliográfico
- Ejercicio 3 - Medios de transporte

## Ejercicio 1 - Pokedex
[Codigo resuelto](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct05-objects-classes-interfaces-alu0101119663/tree/master/src/ejercicio-1)
[Pruebas unitarias realizadas](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct05-objects-classes-interfaces-alu0101119663/blob/master/tests/ejercicio-1.spec.ts)

### Clase Pokemon
```
/**
 * Clase Pokemon
 * Esta clase contiene los atributos que debe tener un objetip tipo Pokemons
 */
export class Pokemon {
  /**
   * Atributos básicos de un objeto tipo Pokemon
   */
  private attributes = {
    attack: 0,
    defense: 0,
    speed: 0,
    health: 0,

  }

  /**
   * Constructor de la clase Pokemon
   * @param name Nombre
   * @param weight Peso 
   * @param height Altura
   * @param type Tipo de Pokemon
   * @param attributes Atributos principales (ataque, defensa, velocidad y puntos de salud)
   */
  constructor(private name: string, private weight: number, private height: number, private type: string, attributes: [number, number, number, number]) {
    this.attributes.attack = attributes[0];
    this.attributes.defense = attributes[1];
    this.attributes.speed = attributes[2];
    this.attributes.health = attributes[3];

    this.name = name;
    this.height = height;
    this.weight = weight;
    this.type = type;
  }

  /**
   * getName()
   * @returns Nombre del Pokemon
   */
  public getName() {
    return this.name;
  }

  /**
   * getWeight()
   * @returns Peso del Pokemon
   */
  public getWeight() {
    return this.weight;
  }

  /**
   * getHeight
   * @returns Altura del Pokemon
   */
  public getHeight() {
    return this.height;
  }

  /**
   * getType
   * @returns Tipo del Pokemon 
   */
  public getType() {
    return this.type;
  }

  /**
   * getAttributes()
   * @returns El atributo principal que elijamos del Pokemon (ataque, defensa, velocidad, tipo)
   */
  public getAttributes() {
    return this.attributes;
  }

  /**
   * setHealth
   * @param hp Nuevo valor para la vida para actualizar en sus atributos 
   */
  public setHealth(hp: number) {
    this.attributes.health = hp;
  }
}

```
Para la realización de esta clase Pokemon lo que hemos hecho es, crear sus atributos privados: **ataque, defensa, velocidad y puntos de salud**, crear un constructor con los datos anteriores y añadiendo el **nombre, peso, altura y tipo**. Tras esto, creamos sus correspondientes *Getters* para acceder de buena manera y por úlitmos creamos la función *Setter* para poder actualizar los **puntos de salud**.
### Clase Pokedex

```
import {Pokemon} from './pokemon';
/**
 * Clase utilizada para simular el funcionamiento de una Pokedex
 */
export class Pokedex {

  /**
   * Constructor de la clase Pokedex
   * @param pokemonDB Vector con los Pokemons disponibles en la Base de Datos (Pokedex)
   */
  constructor(private pokemonDB: Pokemon[]) {
    this.pokemonDB = pokemonDB;
  }

  /**
   * getPokedex
   * @returns Devuelve la Base de Datos creada
   */
  public getPokedex() {
    return this.pokemonDB;
  }

  /**
   * setPokemons
   * @param poke Pokemon que se va a introducir a la Base de Datos 
   */
  public setPokemon(poke: Pokemon) {
    this.pokemonDB.push(poke);
  }

  /**
   * findPokemon
   * @param poke Pokemon introducido para buscar dentro de la Base de Datos 
   * @returns Los datos del Pokemon encontrado, y si no se encuentra nos lo dice
   */
  public findPokemon(poke: Pokemon) {
    let aux: number = -1;

    this.pokemonDB.forEach((i) => {
      if (i == poke) {
        aux = this.pokemonDB.indexOf(i);
      }
    });
    
    if (aux == -1) {
      throw 'No se ha encontrado el Pokemon que se ha indicado';
    }

    return this.pokemonDB[aux];
  }

  /**
   * Muestra el contenido de la Base de Datos (Pokedex)
   */
  public printPokedex() {
    console.log(this.pokemonDB);
  }
}
```
Para la creación de esta clase hemos hecho un constructor al que le pasamos un vector de tipo Pokemon, llamado *pokemonBD*. Tiene su correspondiente *getter* y *setter*. Seguidamente aparece la primera función, en esta función **findPokemon** creamos una variable auxiliar tipo *number* y recorremos todo el vector hasta encontrar el **Pokemon** que estamos buscando, que es pasado por parámetro a esa función. En caso de que no se encuentre lanzamos un *throw*. Por último tenemos la función **printPokedex**. Esta función lo que hará es imprimir por pantalla todo el contenido que tengamos en nuestra **Pokedex**

### Clase Combat

```
import {Pokemon} from './pokemon';

/**
 * Clase Combat
 * Utilizada para simular un combate entre dos Pokemons
 */
export class Combat {

  /**
   * Constructor de la clase
   * @param poke1 Pokemon 1 para el combate (Atacante por defecto)
   * @param poke2 Pokemon 2 para el combate
   */
  constructor(private poke1: Pokemon, private poke2: Pokemon) {
    this.poke1 = poke1;
    this.poke2 = poke2;
  }

  /**
   * showParticipants
   * @returns Los Pokemons que va a combatir entre ellos
   */
  public showParticipants(){
    const participants: string = `Los Pokemons que participan en el combate son: ${this.poke1.getName()} contra ${this.poke2.getName()}`
    return participants;
  }

  /**
   * calculateDemage
   * @param attacker Indice de utilidad para saber que Pokemon es el atacante, tiene dos valores 1 o 2 según el Pokemon que realiza el ataque 
   * @returns El daño del Pokemon que ataca sobre el otro
   */
  public calculateDamage(attacker: number) {
    let effectiveness: number = 0;
    
    if (this.poke1.getType() == this.poke2.getType()) {
      effectiveness = 0.5;
    } else {
      switch (this.poke1.getType()) {
        case "fuego":
          if (this.poke2.getType() == "hierba") {
            effectiveness = 2;
          }

          if (this.poke2.getType() == "agua") {
            effectiveness = 0.5;
          }

          if (this.poke2.getType() == "electrico") {
            effectiveness = 1;
          }

          break;
        
        case "agua":
          if (this.poke2.getType() == "fuego") {
            effectiveness = 2;
          }
          if ((this.poke2.getType() == "electrico") || (this.poke2.getType() == "hierba")) {
            effectiveness = 0.5;
          }

          break;
        
        case "hierba":
          if (this.poke2.getType() == "agua") {
            effectiveness = 2;
          }

          if (this.poke2.getType() == "electrico") {
            effectiveness = 1;
          }

          if (this.poke2.getType() == "fuego") {
            effectiveness = 0.5;
          }

          break;

        case "electrico":
          if (this.poke2.getType() == "agua") {
            effectiveness = 2;
          }

          if ((this.poke2.getType() == "fuego") || (this.poke2.getType() == "hierba")) {
            effectiveness = 1;
          }

          break;
      }
    }
    let demage: number = 0;
    if (attacker == 1) {
      demage = (50 * (this.poke1.getAttributes().attack / this.poke2.getAttributes().defense) * effectiveness);
      return Math.trunc(demage);
    }
    else {
      if (effectiveness == 0.5) {
        effectiveness = 2;
      }
      if (effectiveness == 2) {
        effectiveness = 0.5;
      }
      demage = (50 * (this.poke2.getAttributes().attack / this.poke1.getAttributes().defense) * effectiveness);
      return Math.trunc(demage);
    }
  }

  /**
   * startCombat
   * @returns El ganador de la simulación del combate entre dos Pokemons
   */
  public startCombat(){
    let attacker: number = 0;
    
    this.showParticipants();
    console.log(`Sus correspondientes Puntos de Salud son: Para ${this.poke1.getName()} -> ${this.poke1.getAttributes().health} y para ${this.poke2.getName()} -> ${this.poke2.getAttributes().health}\n`);

    while((this.poke1.getAttributes().health > 0) && (this.poke2.getAttributes().health > 0)) {
      if (attacker == 1) {
        console.log(`Turno de ataque para: ${this.poke1.getName()}`);
        this.poke2.setHealth(this.poke2.getAttributes().health - this.calculateDamage(attacker));
        console.log(`La vida de ${this.poke2.getName()} ha bajado a: ${this.poke2.getAttributes().health }\n`);
        attacker = 2;
      } else {
        console.log(`Turno de ataque para: ${this.poke2.getName()}`);
        this.poke1.setHealth(this.poke1.getAttributes().health - this.calculateDamage(attacker));
        console.log(`La vida de ${this.poke1.getName()} ha bajado a: ${this.poke1.getAttributes().health }\n`);
        attacker = 2;
      }
    }

    if (this.poke1.getAttributes().health <= 0) {
    console.log(`Y ha terminado el combate! El ganado es: ${this.poke2.getName()}.`);
    return this.poke2.getName();
    } else {
      console.log(`Y ha terminado el combate! El ganado es: ${this.poke1.getName()}.`);
      return this.poke1.getName();
    }
  }
}
```
Para la creación de esta clase, nos apoyamos en un constructor al que le pasamos los dos participantes del combate, llamados *poke1* y *poke2*. Tenemos una función **showParticipants** que imprime por pantalla los nombres de los participantes. Una función que calcula el daño de cada ataque llamada **calculateDamage**. A esta se le pasa un parametro que nos servirá como indicador de que Pokemon está atacando, si el 1 o el 2. Creamos una variable donde guardaremos la *efectividad* y nos disponemos a comparar los tipos para obtener este valor. Primero comprobamos si son del mismo tipo y si no, pasamos a un *Switch* en este se compararán los principales tipos de Pokemon como hicimos en el [ejercicio 9 de la práctica 3](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct03-static-types-functions-alu0101119663/blob/master/src/ejercicio-9.ts). Una vez calculamos las efectividad, pasamos a calcular el daño, con la fórmula que nos dieron en este mismo ejercicio que hemos nombrado. Con la particularidad de que si el atacante es el 2, se cambia la efectividad por el contrario. Por ejemplo, si la efectividad es 2, pasaría a valer 0.5. Debido a que no sería efectivo. Por último, tenemos la función que simula el combate **startCombat**. En ella creamos nuestro indice de atacante que irá cambiando de 1 a 2, y posteriormente presentamos a los combatientes. En un bucle *while*, con la condición de que la vida de ningún Pokemon debe ser inferior o igual a 0, empezamos el combate. Con los *if*, comprobamos quién es el atacante y con el contenido de cada if, realizamos la actualización de la vida del que recibe el daño, mostramos su valor actualizado por pantalla y cambiamos el índice del atacante. Cuando se cumple que un Pokemon se ha debilitado. Se muestra por pantalla el ganador.

## Ejercicio 2 - Gestor bibliográfico
[Codigo resuelto](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct05-objects-classes-interfaces-alu0101119663/tree/master/src/ejercicio-2)
[Pruebas unitarias realizadas](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct05-objects-classes-interfaces-alu0101119663/blob/master/tests/ejercicio-2.spec.ts)

## Ejercicio 3 - Medios de transporte
[Codigo resuelto](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct05-objects-classes-interfaces-alu0101119663/tree/master/src/ejercicio-3)
[Pruebas unitarias realizadas](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct05-objects-classes-interfaces-alu0101119663/blob/master/tests/ejercicio-3.spec.ts)

