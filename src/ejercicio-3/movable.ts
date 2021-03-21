/**
 * Interfaz Movable. Tiene los atributos necesario para los vehiculos.
 */
export interface Movable {
  modelo: string;
  numRuedas: number;
  velocidad: number;
  ocupantes: number;
}