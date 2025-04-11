// Implement a function to delete an element from a specific index in an array.

/* 
approach : I have to remove the element from the according to given Idx
so I use .splice() array to deleted the element at specific idx
*/


function deleteEle<T>(arr:T[],index:number):T[]{
    let newArr = [...arr]
    newArr.splice(index, 1)
 return newArr
}

let arrar:number[] = [1,2,3,4,5];

let eleIdx:number = 3;



console.log(deleteEle<number>(arrar, eleIdx))