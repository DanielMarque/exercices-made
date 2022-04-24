
class Fighter {
  constructor(name, health, damagePerAttack) {
    this.name = name
    this.health = health
    this.damagePerAttack = damagePerAttack
  }
}


function declareWinner(fighter1, fighter2, firstAttacker) {
  var fac1 = Math.ceil(fighter1.health / fighter2.damagePerAttack);
  var fac2 = Math.ceil(fighter2.health / fighter1.damagePerAttack);
  if (fac1 < fac2) {
    return fighter2.name;
  } else if (fac2 < fac1) {
    return fighter1.name;
  } else {
    return firstAttacker;
  }
}


const result = declareWinner(new Fighter("Jerry", 30, 3), new Fighter("Harald", 20, 5), "Harald")

console.log(result)
