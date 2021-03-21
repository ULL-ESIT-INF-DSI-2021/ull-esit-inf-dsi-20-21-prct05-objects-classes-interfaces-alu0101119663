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