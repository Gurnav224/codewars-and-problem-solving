


function twoSum(numbers:number[], target:number){
    
    if(numbers.length < 2){
        return []
    }

    for(let i = 0; i < numbers.length; i++){

        for(let j = i + 1; j < numbers.length; j++){

            if(numbers[i] + numbers[j] === target) {

                return [i , j]
            }
        }

    }

    return []

}


let numbers:number[] = [1,2, 3];

let target:number = 4;


console.log(twoSum(numbers, target))