


var Person = function(){
    var person = {
        _name: "Leroy",
        _friends: [],
        fillFriends(f) {
            for(let i=0; i<f.length; i++){
                this._friends.push(f[i])
            }
         }
      }
      return person;
}


var people = [['bob','john'],['bob','john','dave'],[],['bob','john','dave','matt','alex']]

for(var i=0;i<4;i++){
  var person = Person();
  person.fillFriends(people[i])
  console.log(person._friends, people[i])
}