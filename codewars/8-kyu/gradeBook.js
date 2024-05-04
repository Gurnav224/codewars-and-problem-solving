

function getGrade(s1,s2,s3){
    let totalScore = (s1+s2+s3);
    let avgScore = totalScore/3;

    if(avgScore>=90 && avgScore<=100){
        return 'A'
    }
    else if(avgScore>=80 && avgScore<90){
        return 'B'
    }
    else if(avgScore>=70 && avgScore<80){
        return 'C'
    }
    else if(avgScore>=60 && avgScore<70){
        return 'D'
    }
    else {
        return 'F'
    }

}


console.log(getGrade(95,90,93))