


function removeExclamation(string){
    while (string.endsWith("!")) {
        string = string.substring(0, string.length - 1);
    }
    return string;
}


console.log(removeExclamation("Hi!!"))

// easy way

function remove(string){
    return string.replace(/!+$/,"")

}

console.log(remove("Hi!!"))