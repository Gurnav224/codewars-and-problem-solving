
class Person{
    constructor(name,age) {
        this.name = name;
         this.age = age;
       }
       get info(){
        return this.getInfo()
       }
      getInfo(){
         return `${this.name} age is ${this.age}`
       }
}

let person = new Person("Gurnav",24);

console.log(person.info)