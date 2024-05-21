

function hex(val){
    const str = val.toString(16);
    return str.length === 1 ? '0'+str:str
}

function colorOf(r,g,b){
    const he = '#'+hex(r)+hex(g)+hex(b)
    return he
}

console.log(colorOf(255,0,0))