

function flipGravity(d,a){
    const sortedCol = [...a]
  
  
    if(d==='R'){
      return sortedCol.sort((a,b)=>a-b)
    }
    else if(d==='L'){
      return sortedCol.sort((a,b)=>b-a)
    }
    return sortedCol
     
      
      
}




console.log(flipGravity('R',[3,2,1,2]))


// refactor

const gravity = (d,a)=> d==='R'?a.sort((a,b)=>a-b):a.sort((a,b)=>b-a);

console.log(gravity('R',[3,2,1,2]))