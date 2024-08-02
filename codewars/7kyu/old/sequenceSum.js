

const sequenceSum = (begin, end, step) => {
    // May the Force be with you

    if(begin>end){
        return 0
    }

 let sum = 0;
    for(let i=begin; i<=end; i+=step){
        sum = sum + i
    }
    return sum
  };

  console.log(sequenceSum(2,6,2))
  console.log(sequenceSum(2,2,2))
  console.log(sequenceSum(1,5,3))