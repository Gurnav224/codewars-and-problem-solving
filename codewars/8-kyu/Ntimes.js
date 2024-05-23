
Number.prototype.times = function(f){
    for(let i=0; i<this; i++){
        f(i)
    }
}


Number(100).times((i)=>{
    console.log(i)
})
