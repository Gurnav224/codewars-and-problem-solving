
// solution 1
function smallerThanMe(arr){
 let result = [];
 
 for(let i=0; i<arr.length; i++){
     let count = 0;
     for(let j=i+1; j<arr.length; j++){
         if(arr[j]<arr[i]){
            count++
        }
    }
    result.push(count)
 }

 return result
}


// console.log(smallerThanMe([5, 4, 3, 2, 1]))

// output [4,3,2,1,0]


// solution 2

function smallerThanMe2(arr){
    let N = arr.length;
    let res = Array.from(arr).fill(0);

    for(let i=0; i<N-1; i++){
        for(let j=i+1; j<N; j++){
            res[i]++
        }
    }
    return res
}

// console.log(smallerThanMe2([5,4,3,2,1]))


// solution 3

function smallerThanMe3(arr){
    return arr.map((n,i)=>{
        return arr.slice(i).filter((v)=>v<n).length
    })
}


console.log(smallerThanMe3([5,4,3,2,1]))