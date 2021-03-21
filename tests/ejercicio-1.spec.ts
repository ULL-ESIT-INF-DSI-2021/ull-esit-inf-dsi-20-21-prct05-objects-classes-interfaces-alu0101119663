import 'mocha';
import {expect} from 'chai';
import {Pokemon} from '../src/ejercicio-1/pokemon';
import {Pokedex} from '../src/ejercicio-1/pokedex';
import {Combat} from '../src/ejercicio-1/combat';

describe (`Ejercicio 1 - Pokedex`, () => {
  const Pikachu: Pokemon = new Pokemon("Pikachu", 6.0, 0.4, "electrico", [55, 40, 90, 320]);
  const Charmander: Pokemon = new Pokemon("Charmander", 8.5, 0.6, "fuego", [52, 43, 65, 309]);

  const Pokemons = new Pokedex([]);
  Pokemons.setPokemon(Pikachu);
  Pokemons.setPokemon(Charmander);

  const Combate1 = new Combat(Pikachu, Charmander);

  describe('Expectativa para objetos de la clase Pokemon', () => {
    it('Pikachu.getName() return Pikachu', () => {
      expect(Pikachu.getName()).to.be.deep.equal(`Pikachu`);
    });

    it('Pikachu.getWeight() return 6.0', () => {
      expect(Pikachu.getWeight()).to.be.deep.equal(6.0);
    });

    it('Pikachu.getHeight() return 0.4', () => {
      expect(Pikachu.getHeight()).to.be.deep.equal(0.4);
    });

    it('Pikachu.getType() return electrico', () => {
      expect(Pikachu.getType()).to.be.deep.equal(`electrico`);
    });

    it('Pikachu.getAttributes().attack return 55', () => {
      expect(Pikachu.getAttributes().attack).to.be.deep.equal(55);
    });

    it('Pikachu.getAttributes().defense return 40', () => {
      expect(Pikachu.getAttributes().defense).to.be.deep.equal(40);
    });

    it('Pikachu.getAttributes().speed return 55', () => {
      expect(Pikachu.getAttributes().speed).to.be.deep.equal(90);
    });

    it('Pikachu.getAttributes().health return 55', () => {
      expect(Pikachu.getAttributes().health).to.be.deep.equal(320);
    });
  });

  describe('Expectativa para objetos de la clase Pokedex', () => {
    it('Pokemons.getPokedex return not null', () => {
      expect(Pokemons.getPokedex()).not.to.be.deep.equal(null);
    });

    it('Pokemons.findPokemon(Pikachu) return Pikachu', () => {
      expect(Pokemons.findPokemon(Pikachu)).to.be.deep.equal(Pikachu);
    });

    it('Se puede imprimir por pantalla la Pokedex', () => {
      Pokemons.printPokedex();
    });
  });

  describe('Expectativa para objetos de la clase Combat', () => {
    it('Combate1.showParticipants() return Los Pokemons que participan en el combate son: Pikachu contra Charmander', () => {
      expect(Combate1.showParticipants()).to.be.deep.equal(`Los Pokemons que participan en el combate son: Pikachu contra Charmander`);
    });

    it('Combate1.calculateDamage(1) return damege to Charmander', () => {
      expect(Combate1.calculateDamage(1)).to.be.deep.equal(63);
    });

    it('Combate1.startCombat() return winner', () => {
      expect(Combate1.startCombat()).to.be.deep.equal(`Charmander`);
    });
  });
})