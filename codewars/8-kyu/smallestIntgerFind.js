

class smallestIntegerFinder{
    findSmallestInt(args){
        let small = args[0];
        for(let i=0; i<args.length; i++){
            if(small>args[i]){
                small = args[i]
            }
        }
return small
    }
}


let sif = new smallestIntegerFinder();

console.log(sif.findSmallestInt([78,56,232,12,8]))


// refactor 

class smallestIntegerFinder2{
    findSmallestInt(args){
        return Math.min(...args)
    }
}

let sif2 = new smallestIntegerFinder2();

console.log(sif2.findSmallestInt([78,56,232,12,5]))