

// 2000. Reverse Prefix of Word



function reversePrefix(word,ch){
    let index = word.indexOf(ch);
    if(index===-1){
        return word
    };
    let prefix = word.slice(0,index+1);
    let suffix = word.slice(index+1);

    return prefix.split('').reverse().join('')+suffix
}

let word = "abcdefd";
let ch = "d"


console.log(reversePrefix(word,ch))