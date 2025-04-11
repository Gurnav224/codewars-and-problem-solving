// Create a function to update an element at a specified position in an array.

/*
I have to update the element at specific idx
array as argument 
array[idx] = 'updated value'
*/

function update<T>(array:T[], eleIdx:number, element:T):T[] {
 array[eleIdx] = element;
 return array
}


const arr_new:number[] = [1,2,3,4,5];

const newelement:number = 31;


const Idx:number = 3;


console.log(update<number>(arr_new, Idx , newelement))