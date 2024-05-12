

function decibelScale(I){
    let ref = 1e-12;
    return 10*Math.log10(I/ref)
}


console.log(decibelScale(Math.pow(10,-11)))