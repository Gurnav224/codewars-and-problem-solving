


function sentenceCapital(sentence){

    let words = sentence.split(' ');

    return words.map((word)=>word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ")

}


console.log(sentenceCapital('hello how are you'))