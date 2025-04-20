

function sortMyString(S:string):string {
    // your code here
  let even = '';
  let odd = '';
  
  for (let i: number = 0; i < S.length; i++){
    if(i%2=== 0){
      even = even + S[i]
    }
    else{
      odd = odd + S[i]
    }
  }
  
  return even + ' '+odd
}

console.log(sortMyString('CodeWars'))