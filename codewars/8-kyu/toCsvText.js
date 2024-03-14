
function toCsvTest(array){
  let str = "";

  for(let i=0; i<array.length; i++){
   str += array[i].join(',')
   if(i!==array.length-1){
    str += "\n"
   }
  }
  
  return str
}

// refactor 

const toCsvTest2 = (array)=>array.map((arr)=>arr.join(",")).join("\n")

let array = [[ 0, 1, 2, 3, 4 ],
[ 10,11,12,13,14 ],
[ 20,21,22,23,24 ],
[ 30,31,32,33,34 ]] 

console.log(toCsvTest(array))
console.log(toCsvTest2(array))