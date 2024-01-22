

function titleCase(str){

    let words = str.split(" ")

    let strTitleCase = ""

    for(let i=0; i<words.length; i++){
        let word = words[i].toLowerCase()
    strTitleCase += " " +  word.charAt(0).toUpperCase()+word.slice(1)
  
    }
 return strTitleCase
}


let str = "I'm a little tea pot"


console.log(titleCase(str))