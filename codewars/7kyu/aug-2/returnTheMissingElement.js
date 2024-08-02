

// function getMissingElement(superImportantArray){
//   let array = new Set(Array.from({length:10}, (_,i)=>i).sort(()=>Math.random()-0.5))

//   for(let num of superImportantArray){
//     array.delete(num)
//   }
//    return array.values().next().value
//   }


//   console.log(getMissingElement( [0,5,1,3,2,9,7,6,4]))



function getMissingElement(superImportantArray){
    let present = new Array(10).fill(false);

    for(let i=0; i<superImportantArray.length; i++){
        present[superImportantArray[i]] = true
    }


    for(let i=0; i<present.length; i++){
        if(!present[i]){
            return i
        }
    }

    return i

}



console.log(getMissingElement( [0,5,1,3,2,9,7,6,4]))