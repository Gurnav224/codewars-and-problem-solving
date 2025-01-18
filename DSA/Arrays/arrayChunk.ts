

// input [1,2,3,4,5,6,7,8] , size =3 
// output [[1,2,3],[4,5,6],[7,8]]
// 

function arrayChunk(arr:number[],size:number):number[][]{
  let chunked:number[][] = [];

  for (let index: number = 0; index < arr.length; index += size){
    const chunk: number[] = arr.slice(index, index + size);
    chunked.push(chunk)
  }  
 
return chunked
}

console.log(arrayChunk([1,2,3,4,5,6,7,8], 3))