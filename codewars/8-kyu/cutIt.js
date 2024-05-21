


function cutIt(arr){
     
    let smallest  = arr[0].length;

    for(let i=0;  i<arr.length; i++){
        if(arr[i].length<smallest){
            smallest = arr[i].length
        }
    }

let newarr = arr.map((val)=>val.slice(0,smallest));


return newarr
   
}


const one = cutIt(["ab","cde","fgh"]) 
const two = cutIt(["abc","defgh","ijklmn"]) 
const three = cutIt(["codewars","javascript","java"]) 

console.log(one)
console.log(two)
console.log(three)