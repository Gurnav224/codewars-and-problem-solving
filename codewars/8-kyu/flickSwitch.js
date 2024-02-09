

function flickSwitch(arr){
   let boolArr = [];
   let bool = true;
   for(let i=0; i<arr.length; i++){
    if(arr[i]==="flick"){
      bool = !bool
    }
    boolArr.push(bool)

   }

   return boolArr
}


console.log(flickSwitch(['codewars', 'flick', 'code', 'wars']))


// refactor with map

function isFlick(arr){
    let bool = true;
    return arr.map((val)=>{
        if(val==="flick"){
            bool = !bool;
        }
        return bool
    })
}


console.log(isFlick(['flick', 'chocolate', 'adventure', 'sunshine']))
console.log(isFlick(['bicycle', 'jarmony', 'flick', 'sheep', 'flick']))