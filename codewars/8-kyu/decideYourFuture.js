

function yourFutureCareer() {
	var career =Number(Math.random().toFixed(2));
    console.log(career)
		if (career <= 0.32) {
			return "FrontEnd Developer"
        }
		 else if (career <= 0.65) { 
			return " BackEnd Developer"
		} else {
			return 'Full-Stack Developer'
		}

    }
    console.log(yourFutureCareer());


//     Test.assertSimilar(['FrontEnd Developer', 'BackEnd Developer', 'Full-Stack Developer'].includes(yourFutureCareer()), true, "The function should return one of the expected career options");

// // Test case to check if the function returns different careers for different random numbers
// Test.assertNotEquals(yourFutureCareer(), yourFutureCareer(), "The function should return different careers for different random numbers");

// // Test case to check if the function always returns a valid career option
// for (let i = 0; i < 100; i++) {
//     Test.assertSimilar(['FrontEnd Developer', 'BackEnd Developer', 'Full-Stack Developer'].includes(yourFutureCareer()), true, "The function should return one of the expected career options");
// }