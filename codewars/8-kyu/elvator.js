


function elevator(left, right, call){
    // code on! :)
    const distanceToleft = Math.abs(left-call);
    const distanceToRight = Math.abs(right-call);

    if(distanceToleft > distanceToRight){
        return "left"
    }
    else if(distanceToRight> distanceToleft){
        return "right"
    }
    else{
        return "right"
    }
  }


  console.log(elevator(0,1,0))