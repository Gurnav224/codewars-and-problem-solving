

function sorter(textBooks){
    let sortBooks = textBooks.sort((a,b)=>a.toLowerCase()>b.toLowerCase()?1:-1)

return sortBooks
}

console.log(sorter(['Algebra', 'History', '&Geometry', 'English']))