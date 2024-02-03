

class Human{
    constructor(name,gender){
        this.name = name
        this.gender = gender
    }

    introduce(){
        return `Hello, I am ${this.name}`
    }
}

class Man extends Human{
    constructor(name){
        super(name,'male')
    }
}

class Women extends Human{
    constructor(name){
        super(name,'female')
    }
}


class God{
    

    static create(){
      const adam = new Man('Adam');
      const eve  = new Women('Eve')
      return [adam,eve]
    }
}


const createHumans = God.create();
const adam = createHumans[0];
const eve = createHumans[1]

console.log(adam.introduce())
console.log(eve.introduce())