// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack = () => {
    return this.strength
  }
  receiveDamage = (damage) => {
  this.health = this.health - damage  }

}

// Viking
class Viking extends Soldier {
  constructor (name, health, strength) {
    super (health, strength)
    this.name = name;
  }
  receiveDamage = (damage) => {
    this.health = this.health - damage;
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`
    } else {
      return `${this.name} has died in act of combat`
    }
  }
  battleCry = () => {
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {

  receiveDamage = (damage) => {
    this.health = this.health - damage;
  
  if (this.health > 0) {
    return `A Saxon has received ${damage} points of damage`;
  } else if (this.health === 0) {
    return "A Saxon has died in combat";
  }
}
}
// War
class War { 
  constructor () {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }  

  addViking = (viking) => {
    if (viking !== 0) {
    this.vikingArmy.push(viking) }
  }
  addSaxon = (saxon) => {
    if (saxon !== 0) {
    this.saxonArmy.push(saxon) }
  }
 
  vikingAttack = () => {

 } 

}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
