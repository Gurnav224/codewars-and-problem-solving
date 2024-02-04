

function logicalCalc(array,op){

    if(array.length<2){
        return array.length===1?array[0]:false
    }

    let result = array[0];

    for(let i=1; i<array.length; i++){
        switch(op.toUpperCase()){
            case "AND":
                result = result && array[i];
                break;
            case "OR":
                result = result || array[i];
                break;
            case "XOR":
                result = result !== array[i];
                break;
            
            default:

            return undefined
        }
    }

    return result
}

console.log(logicalCalc([true,true,true,false],"OR"))