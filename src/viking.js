// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health = this.health - damage; // no this want dit is een property bij het aanroepen van de functie
    // if (this.health === "alive") {
    //   return `${this.name} has received ${damage} points of damage`;
    // }
    // return `${this.name} has died in the act of combat`;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health = this.health - damage;
    if (this.health) {
      // als het een nummerieke waarde is, en deze 0 of onder 0 is dan is die falsy, daarom is het genoeg om gewoon te kijken of 'health' nog true is
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }
  battleCry() {
    return `Odin Owns You All!`;
  }
}
// Saxon
class Saxon extends Soldier {
  attack() {
    return this.strength;
  }
  receiveDamage(damage) {
    this.health = this.health - damage;
    if (this.health) {
      // als het een nummerieke waarde is, en deze 0 of onder 0 is dan is die falsy, daarom is het genoeg om gewoon te kijken of 'health' nog true is
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(viking) {
    this.vikingArmy.push(viking);
  }

  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }

  vikingAttack() {}

  saxonAttack() {}

  showStatus() {}
}
