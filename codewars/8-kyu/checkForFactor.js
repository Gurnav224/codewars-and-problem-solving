function checkForFactor(base,factor){
   if(base>0 && factor>0){
    if(base%factor===0){
        return true
    }
return false
   }
}


console.log(checkForFactor(7,2))