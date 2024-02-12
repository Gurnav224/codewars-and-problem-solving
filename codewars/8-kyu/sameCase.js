

function sameCase(a,b){
  
    if (!/[a-zA-Z]/.test(a) || !/[a-zA-Z]/.test(b)) {
        return -1;
    }

    if(a.toLowerCase()===a && b.toLowerCase()===b || a.toUpperCase()===a && b.toUpperCase()===b){
        return 1
    }


return 0
}

console.log(sameCase('a','b'))
console.log(sameCase('A','B'))
console.log(sameCase('a','B'))
console.log(sameCase('A','b'))
console.log(sameCase(" ","Z"))
console.log(sameCase("H",":"))