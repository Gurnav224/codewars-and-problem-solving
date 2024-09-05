


function diff(a,b){

    let setA = new Set(a);
    let setB = new Set(b);

    let diff1 = new Set([...setA].filter(x => !setB.has(x)))
    let diff2 = new Set([...setB].filter(x => !setA.has(x)))

    return [...new Set([...diff1 ,...diff2].sort())]
}

console.log(diff(["a","b","z","d","e","d"], ["a","b", "j","j"]))