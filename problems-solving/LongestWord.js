


function findLongestWord(str){

    let words = str.split(" ");

    let longestWords = words[0];

    for(let i=0; i<words.length; i++){

        if(longestWords.length<words[i].length){
            longestWords = words[i]
        }
    }

    return longestWords

}

let text = "The quick brown fox jumped over the lazy dog"

console.log(findLongestWord(text))