import 'mocha';
import {expect} from 'chai';
import {Coche} from '../src/ejercicio-3/coche';
import {Moto} from '../src/ejercicio-3/moto';
import {Patinete} from '../src/ejercicio-3/patinete';
import {Tren} from '../src/ejercicio-3/tren';
import {Guagua} from '../src/ejercicio-3/guagua';
import {Bicicleta} from '../src/ejercicio-3/bicicleta';
import {Peaton} from '../src/ejercicio-3/peaton';
import {Street} from '../src/ejercicio-3/street';

describe(`Ejercicio 3 - Medios de transporte`, () => {
  describe('Expectativa para objetos de la clase Coche', () => {
    const coche1: Coche = new Coche("Seat Ibiza", 4, 65, 5);
    const coche2: Coche = new Coche("Nissan Qashqai", 4, 53, 2);

    it("Se crea el objeto de la manera correcta", () => {
      expect(coche2).not.to.be.equal(null);
    });

    it("getModelo() returns Seat Ibiza", () => {
      expect(coche1.getModelo()).to.be.deep.equal('Seat Ibiza');
    });

    it("getNumRuedas() returns 4", () => {
      expect(coche1.getNumRuedas()).to.be.deep.equal(4);
    });

    it("getOcupantes() returns 5", () => {
      expect(coche1.getOcupantes()).to.be.deep.equal(5);
    });

    it("getVelocidad() returns 65", () => {
      expect(coche1.getVelocidad()).to.be.deep.equal(65);
    });
  });

  describe('Expectativa para objetos de la clase Steet', () => {
    const coche1: Coche = new Coche("Seat Ibiza", 4, 65, 5);
    const coche2: Coche = new Coche("Nissan Qashqai", 4, 53, 2);
    const moto1: Moto = new Moto("Honda", 2, 30, 1);
    const tren1: Tren = new Tren("AVE", 0, 150, 45);
    const peaton1: Peaton = new Peaton("Paco", 0, 5, 1);

    const calle: Street = new Street("Calle Falsa", "Mundo Yupi", [coche1, coche2], [moto1], [], [tren1], [], [], [peaton1]);

    it("Se crea el objeto de la manera correcta", () => {
      expect(calle).not.to.be.equal(null);
    });

    it("getNumeroVehiculos returns 5", () => {
      expect(calle.getNumeroVehiculos()).to.be.deep.equal(5);
    })

    it("Se ordena por velocidad de manera ascendente", () => {
      calle.ordenarVelocidad();
      });

  });

});