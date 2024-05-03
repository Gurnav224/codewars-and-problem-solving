

function multiTable(number){
    let table = ''
 for(let i=1; i<=10; i++){
 table += `${i} * ${number} = ${number*i}`
 if(i!==10){
    table += "\n"
 }
 }
 return table
}


console.log(multiTable(5))