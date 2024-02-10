

function speakEnglish(sentence){
 let checkForEnglish = sentence.toLowerCase().includes("english")
 return checkForEnglish
}

console.log(speakEnglish("english"))