

function findMultiples(integer,limit){
   let storeMutliples = []
    for(let i=integer; i<=limit; i++){
      if(i%integer===0){
        storeMutliples.push(i)
      }
    }

    return storeMutliples
}

console.log(findMultiples(5,25))