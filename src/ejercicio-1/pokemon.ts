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