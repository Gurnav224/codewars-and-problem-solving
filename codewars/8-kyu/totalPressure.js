

function totalPopulation(molarMass1,molarMass2,givenMass1,givenMass2,volume,temp){
   let n1 = givenMass1/molarMass1;
   let n2 = givenMass2/molarMass2;

   let R = 0.082;

   temp +=273.15;

   let p1 = n1*R*temp/volume;
   let p2 = n2*R*temp/volume;

   return p1+p2
}

console.log(totalPopulation(44,30,3,2,5,50))