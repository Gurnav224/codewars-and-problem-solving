

class Dog{
    constructor(name,age,gender,species,size,master,loyal){
        this.name = name
        this.age = age
        this.gender = gender
        this.species = species
        this.size = size
        this.master = master
        this.loyal = loyal
    }
}


class Labrador extends Dog {
    constructor(name, age, gender, master) {
      super(name, age, gender, "Labrador", "Large", master, true);
    }
  }



  var spitsy = new Labrador("Spitsy", 10, "Male", "Donald");

  console.log(spitsy)