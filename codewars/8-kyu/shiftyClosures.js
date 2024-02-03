
const greetAbe = (()=>{
    let name = 'Abe';

    return ()=> 'Hello '+name+'!'
})()

console.log(greetAbe())


const greetBen = (()=>{
    let name = 'Ben';
    
    return ()=> 'Hello '+name +' !'
})()

console.log(greetBen())