


function reverseTriangle(n){
 for(let i=n; i>0; i--){
    let str = ""
    for(let j=n; j>i; j--){
        str +="# "
    }
    console.log(str)
 }
 
}

reverseTriangle(5)