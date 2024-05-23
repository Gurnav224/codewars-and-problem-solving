function Warrior(n){
    var name = n;
    this.name = function(n){
      if( n ) name=n;
      return name;
    }  
  }
    
  Warrior.prototype.toString = function(){
      return "Hi! my name's "+this.name();
  }
  
  var albert = new Warrior("Albert")
var boris  = new Warrior("Boris")

boris.setName('bobo')
  console.log(albert.getName())

  console.log(boris.toString())

  console.log(boris.getName())