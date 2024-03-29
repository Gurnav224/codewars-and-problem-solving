
function abbrevName(name){
    let fullName = name.split(' ')
    let first = fullName[0].slice(0,1)
    let second = fullName[1].slice(0,1)
    return `${first.toUpperCase()}.${second.toUpperCase()}`
}


console.log(abbrevName('Sam Harris'))