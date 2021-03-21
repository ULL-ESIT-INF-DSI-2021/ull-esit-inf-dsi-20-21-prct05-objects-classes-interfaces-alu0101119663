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

### Clase Articulo
```
/**
 * Clase Articulo
 */
export class Articulo{
  /**
   * 
   * @param titulo Titulo del articulo
   * @param autores Autor o autores del articulo
   * @param email Correo electronico del autor o autores del articulo
   * @param keywords Palabras claves o keywords del articulo
   * @param resumen Breve resumen del articulo
   * @param fecha Fecha de publicacion del articulo
   * @param editorial Editorial en la que se publicó el artículo.
   * @param nCitas Cantidad de veces que el artículo ha sido referenciado en otros trabajos.
   */
  constructor(private titulo: string, private autores: string[], private email: string[], private keywords: string[], 
    private resumen: string, private fecha: string, private editorial: string, private nCitas: number) {
    this.titulo = titulo;
    this.autores = autores;
    this.email = email;
    this.keywords = keywords;
    this.resumen = resumen;
    this.fecha = fecha;
    this.editorial = editorial;
    this.nCitas = nCitas;
    }

    /**
     * getTitulo
     * @returns el titulo del articulos
     */
    public getTitulo() {
      return this.titulo;
    }

    /**
     * getAutores
     * @returns el autor o autores del articulo
     */
    public getAutores() {
      return this.autores;
    }

    /**
     * getEmail
     * @returns el email del autor o de los autores del articulo
     */
    public getEmail() {
      return this.email;
    }

    /**
     * getKeywords
     * @returns las palabras claves del articulo
     */
    public getKeywords() {
      return this.keywords;
    }

    /**
     * getResumen
     * @returns el resumen del articulo
     */
    public getResumen() {
      return this.resumen;
    }

    /**
     * getFecha
     * @returns la fecha de publicacion del articulo
     */
    public getFecha() {
      return this.fecha;
    }

    /**
     * getEditorial
     * @returns el editorial del articulo
     */
    public getEditorial() {
      return this.editorial;
    }

    /**
     * getNCitas
     * @returns el numero de citas del articulo
     */
    public getNCitas() {
      return this.nCitas;
    }

    /**
     * setTitulo
     * @param titulo_ Nuevo titulo que queremos actualizar
     */
    public setTitulo(titulo_: string) {
      this.titulo = titulo_;
    }

    /**
     * setAutor
     * @param autor_ Nuevo autor o autores que queremos actualizar
     */
    public setAutor(autor_: string[]) {
      this.autores = autor_;
    }

    /**
     * setEmail
     * @param email_ Nuevo email que queremos actualizar
     */
    public setEmail(email_: string[]) {
      this.email = email_;
    }

    /**
     * setKeywords
     * @param keywords_ Nuevo palabras claves que queremos actualizar
     */
    public setKeywords(keywords_: string[]) {
      this.keywords = keywords_;
    }

    /**
     * setResumen
     * @param resumen_ Nuevo resumen que queremos actualizar
     */
    public setResumen(resumen_: string) {
      this.resumen = resumen_;
    }

    /**
     * setFecha
     * @param fecha_ Nueva fecha que queremos actualizar
     */
    public setFecha(fecha_: string) {
      this.fecha = fecha_;
    }

    /**
     * setEditorial
     * @param editorial_ Nueva editorial  que queremos actualizar
     */
    public setEditorial(editorial_: string) {
      this.editorial = editorial_;
    }

    /**
     * setNCitas
     * @param nCitas_ Nuevo numero de citas que queremos actualizar
     */
    public setNCitas(nCitas_: number) {
      this.nCitas = nCitas_;
    }

    /**
     * calcularAPA
     * @returns el APA correspondiente al articulo
     */
    public calcularAPA(): string {
      let APA: string = "";
      let indice = 0;

      this.autores.forEach((dato) => {
        if (indice == 0) {
          APA = dato;
        } else if (indice > 0) {
          if (indice == this.autores.length - 1) {
            APA += ` y ${dato}`;
          } else {
            APA += `, ${dato}`;
          }
        }
        indice++
      });

      APA += ` (${this.fecha}) ${this.titulo}, ${this.editorial}`;

      return APA;
    }
}
```
Para la realización de esta clase **Articulo** creamos un constructor con los datos que nos dan en el enunciado **titulo, autor, email, keywords, resumen, fecha, editorial, numero de citas**. Una vez creado el constructor creamos sus correspondientes *Getters y Setters*. Tras esto, solo nos queda describir la función que calcula el APA. Para empezar creamos la variable que retornaremos con el resultado y un índice. Recorremos un vector que contiene a los autores con un bucle del tipo de **JavaScript** *forEach* para agruparlos a la cadena que contiene el resultado. Existen tres condicionales que se encargarán de contemplar los casos de si es un único escritor o escritora o si son varios. Una vez hemos añadido todos los autores, ya solo nos falta añadir (concatenar) a la cadena que se retornará los valores de la fecha, el título y el editorial correspondiente.
### Clase Gestor
```
import {Articulo} from './articulo';

/**
 * Clase que se usara como gestor de articulos
 */
export class Gestor{

  /**
   * Constructor del la clase Gestor
   * @param articulos contiene los objetos Articulos que gestionara el Gestor bibliografico
   */
  constructor(public articulos: Articulo[]) {}

  /**
   * getArticulos
   * @returns los articulos que esten almacenados
   */
  public getArticulos() {
    return this.articulos;
  }

  /**
   * addArticulo
   * @param nuevoArticulo es añadido a los artículos que ya están almacenados en el gestor
   */
  public addArticulo(nuevoArticulo: Articulo) {
    this.articulos.push(nuevoArticulo);
  }

  /**
   * Función que imprimirá por pantalla los datos de los articulos en forma de tabla
   */
  public printArticulos() {
    console.table(this.articulos);
  }

  /**
   * Funcion que permite hacer una busqueda mediante filtros
   * @param keyword Que estamos buscando
   * @param filtro Filtro para adecuar la busqueda
   * @returns Todo articulo que resulte después de aplicar el filtro durante la busqueda, este de retorna en formato APA
   */
  public buscarArticulo(keyword: string[], filtro: string[]) {
    let num: number[] = [];
    
    for (let i: number = 0; i < keyword.length; i++) {
      for (let j: number = 0; j < this.articulos.length; j++) {
        for (let k: number = 0; k < filtro.length; k++) {
          switch (filtro[k]) {
            case `keywords`:
              for (let l: number = 0; l < this.articulos[j].getKeywords().length; l++) {
                if (this.articulos[j].getKeywords()[l] == keyword[i]) {
                  num.push(j);
                }
              }
              break;
            
            case `fecha`: 
              if (this.articulos[j].getFecha() == keyword[i]) {
                num.push(j);
              }
              break;

            case `editorial`:
              if (this.articulos[j].getEditorial() == keyword[i]) {
                num.push(j);
              } 
              break;
            
            case `autor`:
              for (let x: number = 0; x < this.articulos[j].getAutores().length; x++) {
                if (this.articulos[j].getAutores()[x] == keyword[i]) {
                  num.push(j);
                }
              }
              break;    
          }
        }
      }
    }

    for (let i = num.length - 1; i >= 0; i--) {
      if (num.indexOf(num[i]) !== 1) {
        num.splice(i, 1);
      }
    }

    let resultadoBusqueda: Articulo[] = [];
    while (num.length > 0) {
      resultadoBusqueda.push(this.articulos[num[0]]);
      num.shift;
    }

    let encontrados: string[] = [];
    for(let i: number = 0; i < resultadoBusqueda.length; i++) {
      encontrados.push(resultadoBusqueda[i].calcularAPA());
      console.log(`Se han encontrado los siguientes articulos: `);
      console.log(encontrados[i]);
    }
    return encontrados;
  }

}
```
Para la realización de la clase *Gestor*, al constructor se le pasa un vector del tipo **Articulos**, ya que se va a trabajar con ellos. Tenemos un *Getter*. Una función que añade un nuevo artículo al vector. Una función que se encarga de mostrar por pantalla el contenido del vector, con la particularidad de que se imprime en forma de tabla. Y por úlitmo la función más interesante. La función **buscarArticulo**, nos permitirá realizar una búsqueda en nuestro vector, con los dos parámetros que le pasamos, en el primero ponemos la palabra que queremos buscar y en el segundo el filtro al que pertenece esta palabra. Para realizar la búsqueda necesitaremos varios bucles anidados, en el primero se recorren las palabras que hemos introducido como primer parámetro, en el segundo se recorre la longitud del artículo y en el tercero se recorre el segundo parámetro que le hemos pasado. Dentro de estos bucles anidados tenemos un *switch* que se encargará de comprobar en cada campo el string que le hemos pasado, y así comprueba en cada artículo lo que se ha querido buscar para luego posteriormente añadir a un vector el número que le corresponde a cada artículo. Para así tener todos los que cumplen las condiciones que se han puesto y porteriormente imprimir los que se han encontrado en formato **APA**.

## Ejercicio 3 - Medios de transporte
[Codigo resuelto](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct05-objects-classes-interfaces-alu0101119663/tree/master/src/ejercicio-3)

[Pruebas unitarias realizadas](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct05-objects-classes-interfaces-alu0101119663/blob/master/tests/ejercicio-3.spec.ts)

### Clase Movable
```
/**
 * Interfaz Movable. Tiene los atributos necesario para los vehiculos.
 */
export interface Movable {
  modelo: string;
  numRuedas: number;
  velocidad: number;
  ocupantes: number;
}
```
En esta clase **Movable** se ha creado una interfaz como se ha pedido en el guión de la práctica. En ella he añadido los atributos que corresponden con vehículos que pueden circular por una calle. Como pueden ser **nombre, número de ruedas, velocidad a la que está circulando y cuantos ocupantes van**. Esta interfaz se "llamará" en cada clase de vehiculos que a continuación vemos.
### Clase Coche, Bicicleta, Guagua, Moto, Patinete, Peatón, Tren
```
import {Movable} from './movable';

/**
 * Clase Coche
 */
export class Coche implements Movable {
  
  /**
   * Constructor de la clase Coche
   * @param modelo Nombre del modelo
   * @param numRuedas Numero de ruedas que tiene
   * @param velocidad Velocidad de circulación
   * @param ocupantes Ocupantes que pueden ir dentro
   */
  constructor(public modelo: string, public numRuedas: number, public velocidad: number, public ocupantes: number) {}

  /**
   * getModelo
   * @returns Nombre del modelo
   */
  public getModelo(){
    return this.modelo;
  }

  /**
   * getNumRuedas
   * @returns Numero de ruedas
   */
  public getNumRuedas(){
    return this.numRuedas;
  }

  /**
   * getVelocidad
   * @returns Velocidad de circulación
   */
  public getVelocidad(){
    return this.velocidad;
  }

  /**
   * getOcupantes
   * @returns Numero de ocupantes
   */
  public getOcupantes(){
    return this.ocupantes;
  }

}
```
He puesto juntas estas clases, ya que son muy similares. Primero se crea el constructor, y posteriormente se crean los *Getter y Setters*.
### Clase Street
```
import {Coche} from './coche';
import {Moto} from './moto';
import {Patinete} from './patinete';
import {Tren} from './tren';
import {Guagua} from './guagua';
import {Peaton} from './peaton';
import {Bicicleta} from './bicicleta';


export class Street {

  /**
   * Constructor de la clase Street
   * @param nombreCalle Nombre de la calle
   * @param localizacion Localizacion de la calle
   * @param numeroCoche Numero de coches que circulan por la calle
   * @param numeroMoto Numero de motos por la calle
   * @param numeroPatinete Numero de patinetes por la calle
   * @param numeroTren Numero de trenes por la calle
   * @param numeroGuagua Numero de guaguas por la calle
   * @param numeroBicicleta Numero de bicicletas por la calle
   * @param numeroPeaton Numero de peatones por la calle
   */
  constructor(private nombreCalle: string, private localizacion: string, private numeroCoche: Coche[], private numeroMoto: Moto[], private numeroPatinete: Patinete[],
    private numeroTren: Tren[], private numeroGuagua: Guagua[], private numeroBicicleta: Bicicleta[], private numeroPeaton: Peaton[]) {}

  /**
   * Imprimir por pantalla cantidad de vehiculos que hay en la calle de forma desglosada
   */  
  public informacionCalle() {
    console.log(`Datos de la calle ${this.nombreCalle}, ${this.localizacion}`);
    console.log(`Coches: ${this.numeroCoche.length}`);
    console.log(`Motos: ${this.numeroMoto.length}`);
    console.log(`Patinetes: ${this.numeroPatinete.length}`);
    console.log(`Tren: ${this.numeroTren.length}`);
    console.log(`Guagua: ${this.numeroGuagua.length}`);
    console.log(`Bicicleta: ${this.numeroBicicleta.length}`);
    console.log(`Peaton: ${this.numeroPeaton.length}`);
  }

  /**
   * Devuelve el numero maximo de vehiculos
   * @returns 
   */
  public getNumeroVehiculos(){
    return (this.numeroCoche.length + this.numeroMoto.length + this.numeroPatinete.length + this.numeroTren.length + this.numeroGuagua.length + this.numeroBicicleta.length + this.numeroPeaton.length);
  }

  /**
   * Añade un vehiculo a la calle
   * @param item Vehiculo a introducir
   */
  public addVehiculo(item: Coche | Moto | Patinete | Tren | Guagua | Bicicleta | Peaton) {
    if (item instanceof Coche) {
      this.numeroCoche.push(item);
    } else if (item instanceof Moto) {
      this.numeroMoto.push(item);
    } else if (item instanceof Patinete) {
      this.numeroPatinete.push(item);
    } else if (item instanceof Tren) {
      this.numeroTren.push(item);
    } else if (item instanceof Guagua) {
      this.numeroGuagua.push(item);
    } else if (item instanceof Bicicleta) {
      this.numeroBicicleta.push(item);
    } else if (item instanceof Peaton) {
      this.numeroPeaton.push(item)
    }
  }

  /**
   * Elimina un vehiculo de la calle
   * @param item Vehiculo a eliminar
   */
  public removeVehiculo(item: Coche | Moto | Patinete | Tren | Guagua | Bicicleta | Peaton) {
    if (item instanceof Coche) {
      this.numeroCoche.splice(this.numeroCoche.indexOf(item), 1);
    } else if (item instanceof Moto) {
      this.numeroMoto.splice(this.numeroMoto.indexOf(item), 1);
    } else if (item instanceof Patinete) {
      this.numeroPatinete.splice(this.numeroPatinete.indexOf(item), 1);
    } else if (item instanceof Tren) {
      this.numeroTren.splice(this.numeroTren.indexOf(item), 1);
    } else if (item instanceof Guagua) {
      this.numeroGuagua.splice(this.numeroGuagua.indexOf(item), 1);
    } else if (item instanceof Bicicleta) {
      this.numeroBicicleta.splice(this.numeroBicicleta.indexOf(item), 1);
    } else if (item instanceof Peaton) {
      this.numeroPeaton.splice(this.numeroPeaton.indexOf(item), 1);
    }
  }

  /**
   * Ordena los vehiculos según su velocidad, de formas ascendente.
   */
  public ordenarVelocidad() {
    this.numeroCoche.sort(function(x, y) {
      return x.getVelocidad() - y.getVelocidad();
    });
    this.numeroMoto.sort(function(x, y) {
      return x.getVelocidad() - y.getVelocidad();
    });
    this.numeroPatinete.sort(function(x, y) {
      return x.getVelocidad() - y.getVelocidad();
    });
    this.numeroTren.sort(function(x, y) {
      return x.getVelocidad() - y.getVelocidad();
    });
    this.numeroGuagua.sort(function(x, y) {
      return x.getVelocidad() - y.getVelocidad();
    });
    this.numeroBicicleta.sort(function(x, y) {
      return x.getVelocidad() - y.getVelocidad();
    });
    this.numeroPeaton.sort(function(x, y) {
      return x.getVelocidad() - y.getVelocidad();
    });
  }
}
```
En esta última clase, se crea un constructor al que le pasamos los parámetros de **nombre de la calla, localización y número de Coches, Bicicletas, Guaguas, Motos, Patinetes, Peatónes y Trenes**. Posteriormente se crea la función **informacionCalle** que imprime por pantalla los datos del estado actual de la calle. Luego tenemos un *Getter* para obtener el número de vehiculos que hay en la calle. Un método que nos permite añadir un vehículo a la calle. Dependiendo del tipo que sea, se hará un *push* a su correspondiente *array*. Del mismo modo hay un método que se encarga de eliminar un determinado vehículo, por si se da el caso de que este vehículo ya ha salido de la calle. Y por último una función que se encarga de ordenar los vehiculos por velocidad de forma ascendente. Para realizarlo uso la función **sort**. A esta función se le pasan los elementos que vamos a comparar, yo los he llamado X e Y, hace la resta en el atributo correspondiente, y en funcioón al valor que se dé se ordena.

## Pruebas Unitarias realizadas
```
  Ejercicio 1 - Pokedex
    Expectativa para objetos de la clase Pokemon
      ✓ Pikachu.getName() return Pikachu
      ✓ Pikachu.getWeight() return 6.0
      ✓ Pikachu.getHeight() return 0.4
      ✓ Pikachu.getType() return electrico
      ✓ Pikachu.getAttributes().attack return 55
      ✓ Pikachu.getAttributes().defense return 40
      ✓ Pikachu.getAttributes().speed return 55
      ✓ Pikachu.getAttributes().health return 55
    Expectativa para objetos de la clase Pokedex
      ✓ Pokemons.getPokedex return not null
      ✓ Pokemons.findPokemon(Pikachu) return Pikachu
[
  Pokemon {
    name: 'Pikachu',
    weight: 6,
    height: 0.4,
    type: 'electrico',
    attributes: { attack: 55, defense: 40, speed: 90, health: 320 }
  },
  Pokemon {
    name: 'Charmander',
    weight: 8.5,
    height: 0.6,
    type: 'fuego',
    attributes: { attack: 52, defense: 43, speed: 65, health: 309 }
  }
]
      ✓ Se puede imprimir por pantalla la Pokedex
    Expectativa para objetos de la clase Combat
      ✓ Combate1.showParticipants() return Los Pokemons que participan en el combate son: Pikachu contra Charmander
      ✓ Combate1.calculateDamage(1) return damege to Charmander
Sus correspondientes Puntos de Salud son: Para Pikachu -> 320 y para Charmander -> 309

Turno de ataque para: Charmander
La vida de Pikachu ha bajado a: 255

Turno de ataque para: Charmander
La vida de Pikachu ha bajado a: 190

Turno de ataque para: Charmander
La vida de Pikachu ha bajado a: 125

Turno de ataque para: Charmander
La vida de Pikachu ha bajado a: 60

Turno de ataque para: Charmander
La vida de Pikachu ha bajado a: -5

Y ha terminado el combate! El ganado es: Charmander.
      ✓ Combate1.startCombat() return winner

  Ejercicio 2 - Gestor bibliográfico
    Expectativa para objetos de la clase Articulo
      ✓ getTitulo() returns Kroos, el truco del falso lento
      ✓ getAutores() returns David Alvarez
      ✓ getEmail() returns davidalvarez@gmail.com
      ✓ getKeywords() returns Futbol
      ✓ getFecha() returns 2021
      ✓ getEditorial() returns ElPais
      ✓ getNCitas() returns 8
      ✓ calcularAPA() returns David Alvarez (2021) Kroos, el truco del falso lento, ElPais
    Expectativa para objetos de la clase Gestor
┌─────────┬─────────────────────────────────────────────────────────────┬─────────────────────┬──────────────────────────────┬────────────────┬───────────────────────────────────────────────────────────────────┬────────┬───────────┬────────┐
│ (index) │                           titulo                            │       autores       │            email             │    keywords    │                              resumen                              │ fecha  │ editorial │ nCitas │
├─────────┼─────────────────────────────────────────────────────────────┼─────────────────────┼──────────────────────────────┼────────────────┼───────────────────────────────────────────────────────────────────┼────────┼───────────┼────────┤
│    0    │              'Kroos, el truco del falso lento'              │ [ 'David Alvarez' ] │ [ 'davidalvarez@gmail.com' ] │  [ 'Futbol' ]  │ 'Victoria del Real Madrid ante el Celta, con un gran Toni Kroos.' │ '2021' │ 'ElPais'  │   8    │
│    1    │ 'Gobierno. No habra elecciones aunque rompa Unidas Podemos' │ [ 'Lucia Mendez' ]  │ [ 'luciamendez@gmail.com' ]  │ [ 'Politica' ] │             'Actualización sobre el actual Gobierno'              │ '2021' │ 'elMundo' │   8    │
└─────────┴─────────────────────────────────────────────────────────────┴─────────────────────┴──────────────────────────────┴────────────────┴───────────────────────────────────────────────────────────────────┴────────┴───────────┴────────┘
      ✓ printArticulos()
      ✓ buscarArticulo()

  Ejercicio 3 - Medios de transporte
    Expectativa para objetos de la clase Coche
      ✓ Se crea el objeto de la manera correcta
      ✓ getModelo() returns Seat Ibiza
      ✓ getNumRuedas() returns 4
      ✓ getOcupantes() returns 5
      ✓ getVelocidad() returns 65
    Expectativa para objetos de la clase Steet
      ✓ Se crea el objeto de la manera correcta
      ✓ getNumeroVehiculos returns 5
      ✓ Se ordena por velocidad de manera ascendente
```

## Bibliografía
Guión - https://ull-esit-inf-dsi-2021.github.io/prct05-objects-classes-interfaces/
