

function mergeStrings(first,second){
    for(let i=0; i<first.length; i++){

        if(second.startsWith(first.slice(i))){
            return first.slice(0,i)+second;
        }
    }
    return first + second
}


console.log(mergeStrings("abaabaab","aabaabab"))