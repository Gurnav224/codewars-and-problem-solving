

function array(string){
    let str = string.split(',')
    return str.slice(1,str.length-1).join(' ') || null
}

console.log(array("1,2,3"))
console.log(array("1,2,3,4"))
console.log(array("1,2,3,4,5"))
console.log(array('A1,B2,C3,D4,E5'))