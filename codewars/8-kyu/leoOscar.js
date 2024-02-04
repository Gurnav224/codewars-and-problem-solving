

function leo(oscar){

  if(oscar>88){
    return "Leo got one already!"


  }

    else if(oscar===88){
        return "Leo finally won the oscar! Leo is happy"
    }
    else if(oscar===86){
        return "Not even for Wolf of wallstreet?!"
    }
    else if((oscar!==88 || oscar!==86 ) && oscar<88){
        return  "When will you give Leo an Oscar?"
    }
}


console.log(leo(89))
console.log(leo(88))
console.log(leo(87))
console.log(leo(86))