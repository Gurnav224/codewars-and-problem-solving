

class Animal{
   constructor(name){
    this.name = name
   }

   speak(){
    return this.name+ ' makes a noise.';
   }
}


const animal = new Animal('Mr Whiskers')

console.log(animal.speak())


class Cat extends Animal{
    constructor(name) {
        super(name)
    }

    speak(){
        return this.name+' meows.';
    }
}

const myCat = new Cat('kiling Paul');

console.log(myCat.speak())