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