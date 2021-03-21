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