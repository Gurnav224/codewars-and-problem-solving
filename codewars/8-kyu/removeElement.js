


function removeElement(arr){
  
  let newArr = []
 for(let i=0; i<arr.length; i++){
    if(i===0 || i%2===0)
    newArr.push(arr[i])
 }
 return newArr
}

let arr = ["Keep", "Remove", "Keep", "Remove", "Keep",]

console.log(removeElement(arr))