


function checkExam(arr1  , arr2 ){
    const length = arr1.length === arr2.length;
    if(!length){
        return 0
    }

    let score = 0;

    for(let i =0; i < arr1.length; i++){
        if(arr1[i] === arr2[i]){
            score = score + 4
        }
        else if(arr2[i]===""){
            score = score + 0
        }
        else{
            score = score - 1
        }
    }

    if(score < 0){
        return 0
    }
    return score
}



console.log(checkExam(["a", "a", "b", "b"] ,  ["a", "c", "b", "d"] ))

console.log(checkExam( ["a", "a", "c", "b"]  ,  ["a", "a", "b", "" ] ))