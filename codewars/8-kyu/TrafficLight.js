function updateLight(current) {
  
    //your code here!

    if(current==="green"){
        return "yellow"
    }
    else if(current==="yellow"){
        return "red"
    }
    else if(current==="red"){
      return "green"
    }
  
  }


  console.log(updateLight("yellow"))
  console.log(updateLight("red"))
  console.log(updateLight("green"))