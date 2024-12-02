
function friend(friends){
    //your code here
    return friends.filter((name)=>name.length===4)
  }


  console.log(friend(["Ryan", "Kieran", "Jason", "Yous"]));
  console.log(friend(["Peter", "Stephen", "Joe"]))