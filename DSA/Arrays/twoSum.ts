
// input [2,7,11,15] , target =  11
// output: [0 ,1] arr[0] + arr[1] = 11;


function twoSum(arr: number[], target: number):number[]{
  
  for (let i: number = 0; i < arr.length; i++){
    for (let j = i + 1; j < arr.length; j++){
      if(arr[i] + arr[j] === target){
        return [i , j]
      }
    }
  }  
  return []
}



console.log(twoSum([2, 9, 11, 15], 11));
console.log(twoSum([7,9,15,23,2], 9))