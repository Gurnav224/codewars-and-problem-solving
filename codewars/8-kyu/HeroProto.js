

function Hero(name,position,health,damage,experience){
this.name = name || 'Hero';
this.position=position;
this.health=health;
this.damage = damage;
this.experience=experience;
}

Hero.prototype.name = function(name){
    this.name = name
}

let myHero = new Hero('Hero','00',100,5,0);

console.log(myHero.name)
console.log(myHero.experience)
console.log(myHero.health)
console.log(myHero.position)
console.log(myHero.damage)


let instance = new Hero("Greg");

console.log(instance)