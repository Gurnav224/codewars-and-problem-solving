/*

Two red beads are placed between every two blue beads. There are N blue beads. After looking at the arrangement below work out the number of red beads.

@ @@ @ @@ @ @@ @ @@ @ @@ @

Implement a function returning the number of red beads.
If there are less than 2 blue beads return 0.
*/

// caculate  gaps using 2*(n-1)

function countRedBeads(n: number):number {
  if (n < 2) {
    return 0;
  }
  return 2 * (n - 1);
}

console.log(countRedBeads(3));
console.log(countRedBeads(5));
console.log(countRedBeads(-2));
