
// Given an array, write a function to remove all occurrences of a specified value.

/*

remove the all occurences of spcecific value
const values = [1,2,2,3,5,6,6,9];

value = 2

[1,3,5,6,6,9]

*/

function occurence<T>(arr:T[], value:number):T[] {

    let newArr:T[] = [];

    for(let i = 0; i < arr.length; i++){
        if(arr[i] !== value){
            newArr.push(arr[i])
        }
    }
    return newArr
}


const values = [1,2,2,3,5,6,6,9];

const value:number = 2


console.log(occurence<number>(values, value))