

function splitAndMerge(string,separator){
    let str = string.split(" ");

    let modifiedWords = str.map(word=>word.split("").join(separator));

    return modifiedWords.join(" ")
}


console.log(splitAndMerge("My name is John", " "))
// ==  "M y n a m e i s J o h n"
console.log(splitAndMerge("My name is John", "-"))  
// ==  "M-y n-a-m-e i-s J-o-h-n"
console.log(splitAndMerge("Hello World!", "."))   
// ==  "H.e.l.l.o W.o.r.l.d.!"
console.log(splitAndMerge("Hello World!", ","))     
// ==  "H,e,l,l,o W,o,r,l,d,!"
