


function solve(word:string){
  let result:number[] = [];
  for (let i = 0; i < word.length; i++){
    let char = word[i];
    if(char === char.toUpperCase()){
      result.push(i)
    }
  }
  return result
}


console.log(solve("CodEWaRs"))