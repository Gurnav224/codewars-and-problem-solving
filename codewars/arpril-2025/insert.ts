// Write a function to insert an element at a given index in an array.

/*
approach : I have new element at specific index in an array
so I extract array chunk according the index number
array.slice(0, index)
put the element into the array 
now add left element after the new element added
*/

function insert<T>(array:T[],element:T, index:number ):T[] {
    return [...array.slice(0, index), element, ...array.slice(index)]
}

const arr:number[] = [1,2,3,4]

const element:number = 5;

const index:number = 2;



console.log(insert<number>(arr, element, index))