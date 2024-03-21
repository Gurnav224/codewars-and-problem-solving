
function match(candidate,job){
    if (!candidate.minSalary || !job.maxSalary) {
        throw new Error("Candidate's minimum salary or job's maximum salary is not provided.");
    }
 return candidate.minSalary*0.9<=job.maxSalary

}
let candidate1 = { minSalary: 120000 },
    job1 = { maxSalary: 130000 },
    job2 = { maxSalary: 80000 };


console.log(match(candidate1,job1))
console.log(match(candidate1,job2))