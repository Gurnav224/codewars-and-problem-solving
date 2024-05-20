

function cutCube(volume,n){
    function isPerfectCube(x){
        const cuberoot = Math.cbrt(x);
        return Number.isInteger(cuberoot)
    }

    return isPerfectCube(volume) && isPerfectCube(volume/n)
}

console.log(cutCube(27,27))