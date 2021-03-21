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