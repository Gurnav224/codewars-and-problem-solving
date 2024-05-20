


function blackAndWhite(arr){
    //coding here...

    if(!Array.isArray(arr)){
        return "It's a fake array";
    }

    const containsFive = arr.includes(5);
    const continsThirteen = arr.includes(13);

    if(containsFive && continsThirteen){
        return "It's a black array"
    }
    else{
        return "It's a white array"
    }
     
    
  }

  console.log(blackAndWhite(5,12))
  console.log(blackAndWhite([5,13]))
  console.log(blackAndWhite([5,12]))