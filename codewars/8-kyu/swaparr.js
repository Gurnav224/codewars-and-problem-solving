

function swap(args){

    for(let i=0; i<args.length-1; i++){

        let temp = args[i];
        args[i] = args[i+1];
        args[i+1] = temp;
    }

    return args
}


console.log(swap([1,2,3,4,5]))