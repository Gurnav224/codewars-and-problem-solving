

function Dog (breed) {
    this.breed = breed,
    this.bark=function(){
        return "Woof";
    }
  }
  
  var snoopy = new Dog("Beagle");
  
  snoopy.bark = function() {
    return "Woof";
  };

  
  
  var scoobydoo = new Dog("Great Dane");
  

  
console.log(scoobydoo.bark())