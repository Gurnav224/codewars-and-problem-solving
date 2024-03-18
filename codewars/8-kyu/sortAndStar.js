
function twoSort(s){
 s.sort((a,b)=>{
    const lowerA = a.toLowerCase();
    const lowerB = b.toLowerCase();

    if(lowerA<lowerB){
        return -1;
    }
    if(lowerA>lowerB){
        return 1
    }

        return 0
    
})

let firstElement = s[0]

return firstElement.split('').join('***')
}

console.log(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]))