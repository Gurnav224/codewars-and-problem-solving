


function fiveLine(s){
    let str = '';
    for (let i = 1; i <= 5; i++) {
        str += s.trim().repeat(i);
        if (i < 5) {
            str += '\n';
        }
    }
    return str;
}


console.log(fiveLine(' a'))