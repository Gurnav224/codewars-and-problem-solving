


function canonReady(gunners){
    // for(let guner in gunners){
    //     if(gunners[guner]!=="aye"){
    //         return "Shiver me Timbers!"
    //     }
      
    // }
    // return "Fire!"

    const keys = Object.values(gunners);

return keys.includes('nay')?'shiver me timbers':'Fire!'
       
}

let a = {'Mike':'aye','Joe':'aye','Johnson':'aye','Peter':'aye'};
let b = {'Mike':'aye','Joe':'nay','Johnson':'aye','Peter':'aye'};



console.log(canonReady(a))
console.log(canonReady(b))