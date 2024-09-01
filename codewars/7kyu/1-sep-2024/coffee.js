

function coffee(str){
//    return str.split(' ').map((word)=>word==='coffee' ? word.toUpperCase() : word).join(' ')

return str.replace(/coffee/gi,'COFFEE')
}


console.log(coffee("Did I only have two cups of coffee this morning? I need more." ))