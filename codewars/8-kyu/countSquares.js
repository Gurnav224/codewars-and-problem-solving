function countSquares(cuts) {
    if (cuts === 0) {
        return 1; // Initial solid blue cube
    }

    // Calculate the total number of cubes along each axis after n cuts
    const totalCubes = Math.pow(cuts + 1, 3);

    // Calculate the interior cubes (cubes with no red faces)
    const interiorCubes = Math.pow(cuts - 1, 3);

    // Calculate the cubes with at least one red face
    const redCubes = totalCubes - interiorCubes;

    return redCubes;
}

console.log(countSquares(2)); // Output: 26
console.log(countSquares(4)); // Output: 98
