

function arrayChunk(arr,size){
    let chunked = [];
    let index = 0;

    while(index<arr.length){
        const chunk = arr.slice(index , index+size);
        chunked.push(chunk);
        index += size;
    }

    return chunked
}

console.log(arrayChunk([1,2,3,4,5,6,7,8],3))