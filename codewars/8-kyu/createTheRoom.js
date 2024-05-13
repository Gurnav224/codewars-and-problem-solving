


class Rooms{
    constructor(name,description,completed){
        this.name = name
        this.description = description
        this.completed = completed
    }
}

const room1 = new Rooms('room1','escape room one',true)
const room2 = new Rooms('room2','escape room two',true)
const room3 = new Rooms('room3','escape room three',true)


console.log(room1)
console.log(room2)
console.log(room3)