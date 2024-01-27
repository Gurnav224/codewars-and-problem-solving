

function well(x){
     let count = 0;
    for(let i=0; i<x.length; i++){

      if(x[i]==="good"){
        count++;
       
   
      }
    }
    if(count===0){
        return "Fail!"
     }
   
      else if(count<=2){
          return "publish!"
        }
      else  if(count>2){
            return "I smell the series"
         }
}

console.log(well(['bad', 'bad', 'bad', 'bad']))