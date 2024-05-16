


function sc(floor){
    if(floor<=1){
        return ""
    }else if(floor<7){
        return 'Aa~ '.repeat(floor - 1) + 'Pa! ' + 'Aa!';
    }
    else{
        return 'Aa~ '.repeat(floor - 1) + 'Pa!' 
    }
}

console.log(sc(6))
console.log(sc(7))
console.log(sc(10))