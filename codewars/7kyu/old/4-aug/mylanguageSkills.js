

function myLanguages(results){
   const objKeys = Object.keys(results);


   let newObj = objKeys.map(obj=>({language:obj, score:results[obj]}))

   let sortedArray = newObj.sort((a,b)=>b.score-a.score);

   let scoreAbove60 = sortedArray.filter((obj)=>obj.score>=60).map((obj)=>obj.language)

return scoreAbove60
 
}

// console.log(myLanguages({"Java": 10, "Ruby": 80, "Python": 65}));
// console.log(myLanguages({"Hindi": 60, "Dutch" : 93, "Greek": 71}));
// console.log(myLanguages({"C++": 50, "ASM": 10, "Haskell": 20}))



function myLanguages(results){
    const objKeys = Object.keys(results);

    const newObj = objKeys.reduce((acc,curr)=>{
        return [...acc,{language:curr,score:results[curr]}]
    },[]);

    let sortArray = newObj.sort((a,b)=>b.score-a.score);

    let scoreAbove60 = sortArray.filter((value)=>value.score >= 60);

    let languageList = scoreAbove60.map((obj)=>obj.language)

    return languageList
}


// console.log(myLanguages({"Java": 10, "Ruby": 80, "Python": 65}));
// console.log(myLanguages({"Hindi": 60, "Dutch" : 93, "Greek": 71}));
// console.log(myLanguages({"C++": 50, "ASM": 10, "Haskell": 20}))


function myLanguages2(results){
return Object.keys(results).filter((score)=>results[score]>=60).sort((a,b)=>results[a]-results[b])
}

console.log(myLanguages2({"Java": 10, "Ruby": 80, "Python": 65}));