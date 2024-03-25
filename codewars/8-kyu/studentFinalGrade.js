
function studentFinalGrade(exam,project){
    if(exam>90||project>10){
        return 100;
    }
    else if(exam>75&&project>=5){
        return 90
    }
    else if(exam>50 && project>=2){
        return 75
    }
    else{
        return 0
    }
}


console.log(studentFinalGrade(100,12))
console.log(studentFinalGrade(85,5))