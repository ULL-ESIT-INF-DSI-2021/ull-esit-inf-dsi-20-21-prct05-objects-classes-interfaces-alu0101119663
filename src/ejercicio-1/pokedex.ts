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