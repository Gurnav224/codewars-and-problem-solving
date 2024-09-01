

function last(...args){

    if(args.length===1){
        const arg = args[0]
        if(Array.isArray(arg) || typeof arg === 'string'){
            return arg[arg.length-1]
        }
       return arg
    }


    return args[args.length-1]

}


console.log(last(5)              )  
console.log(last([1, 2, 3, 4])   )
 console.log(last("xyz")          )
 console.log(last(1, 2, 3, 4)     )
 console.log(last([1, 2], [3, 4])   )
console.log(last([[1, 2], [3, 4]])   )