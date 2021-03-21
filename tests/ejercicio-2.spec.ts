import 'mocha';
import {expect} from 'chai';
import {Articulo} from '../src/ejercicio-2/articulo';
import {Gestor} from '../src/ejercicio-2/gestor';

describe(`Ejercicio 2 - Gestor bibliográfico`, () => {
  const art1: Articulo = new Articulo("Kroos, el truco del falso lento", ["David Alvarez"], ["davidalvarez@gmail.com"], ["Futbol"], "Victoria del Real Madrid ante el Celta, con un gran Toni Kroos.", "2021", "ElPais", 8);
  const art2: Articulo = new Articulo("Gobierno. No habra elecciones aunque rompa Unidas Podemos", ["Lucia Mendez"], ["luciamendez@gmail.com"], ["Politica"], "Actualización sobre el actual Gobierno", "2021", "elMundo", 8);

  const Gestor1 = new Gestor([]);
  Gestor1.addArticulo(art1);
  Gestor1.addArticulo(art2);

  describe('Expectativa para objetos de la clase Articulo', () => {
    it('getTitulo() returns Kroos, el truco del falso lento', () => {
      expect(art1.getTitulo()).to.be.deep.equal("Kroos, el truco del falso lento");
    });

    it('getAutores() returns David Alvarez', () => {
      expect(art1.getAutores()).to.be.deep.equal(["David Alvarez"]);
    });

    it('getEmail() returns davidalvarez@gmail.com', () => {
      expect(art1.getEmail()).to.be.deep.equal(["davidalvarez@gmail.com"]);
    });

    it('getKeywords() returns Futbol', () => {
      expect(art1.getKeywords()).to.be.deep.equal(["Futbol"]);
    });

    it('getFecha() returns 2021', () => {
      expect(art1.getFecha()).to.be.deep.equal("2021");
    });

    it('getEditorial() returns ElPais', () => {
      expect(art1.getEditorial()).to.be.deep.equal("ElPais");
    });

    it('getNCitas() returns 8', () => {
      expect(art1.getNCitas()).to.be.deep.equal(8);
    });

    it('calcularAPA() returns David Alvarez (2021) Kroos, el truco del falso lento, ElPais', () => {
      expect(art1.calcularAPA()).to.be.deep.equal("David Alvarez (2021) Kroos, el truco del falso lento, ElPais");
    });
  });

  describe('Expectativa para objetos de la clase Gestor', () => {
   
    it('printArticulos()', () => {
      Gestor1.printArticulos();
    });

    it('buscarArticulo()', () => {
      Gestor1.buscarArticulo(["Futbol"], ["keywords"]);
    });
  });

});