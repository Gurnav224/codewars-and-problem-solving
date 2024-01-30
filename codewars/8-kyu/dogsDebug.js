function howManyDalmations(number){ 
  
 
   
     var dogs =["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIANS!!!"];
  
//     var respond = number <= 10 ? dogs[0]: (number <= 50 ? dogs[1] : (number === 101?  dogs[3] : dogs[2]))
    
//   return respond

if(number<=10){
    return dogs[0]
}else if(number<=50){
    return dogs[1]
}
else if(number===101){
    dogs[3]
}
else{
    dogs[2]
}
    }

  console.log(howManyDalmations(50))