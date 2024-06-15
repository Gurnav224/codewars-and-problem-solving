

function sumIntegers(n){
    let sum  = 0;

    for(let i=0; i<n; i++){
        sum = sum+i;
    }
    return sum
}

const NUMBER_OF_REPETITIONS = 10; // Number of times to repeat the test
const N = 100;

let sumOfRunningTime = 0n;

for (let k = 1; k <= NUMBER_OF_REPETITIONS; k++) {
  const start = process.hrtime.bigint();

  const answer = sumIntegers(N);

  const end = process.hrtime.bigint();

  sumOfRunningTime += end - start;
}

const averageTime = sumOfRunningTime / BigInt(NUMBER_OF_REPETITIONS);

console.log(
  `Summing ${N} numbers took an average of  ${averageTime} nanoseconds`
);