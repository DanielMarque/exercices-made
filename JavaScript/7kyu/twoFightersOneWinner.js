
class Fighter {
  constructor(name, health, damagePerAttack) {
    this.name = name
    this.health = health
    this.damagePerAttack = damagePerAttack
  }
}


function declareWinner(fighter1, fighter2, firstAttacker) {

  let f1Health = fighter1.health
  let f2Health = fighter2.health

  let f1Damage = fighter1.damagePerAttack
  let f2Damage = fighter2.damagePerAttack

  if (firstAttacker === fighter1.name) {
    f2Health -= f1Damage
  } else {
    f1Health -= f2Damage
  }

  while (true) {

    f1Health -= f2Damage
    f2Health -= f1Damage
    if (f2Health <= 0) {
      return fighter1.name
    } else if (f1Health <= 0) {
      return fighter2.name
    }
  }
};

const result = declareWinner(new Fighter("Jerry", 30, 3), new Fighter("Harald", 20, 5), "Harald")

console.log(result)
