

function addExtra(listOfNumbers){
 let newList = [...listOfNumbers];
 newList.push(13);
 return newList
}


let inputList = [1,2,3];
let updated = addExtra(inputList)
console.log(updated.length+1)