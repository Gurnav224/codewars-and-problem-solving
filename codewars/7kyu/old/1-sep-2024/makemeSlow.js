

  function makeMeSlow() {
    console.log('Starting...');
  
    // Create a Promise that resolves after 7 seconds
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Finished after at least 7 seconds!');
        resolve();
      }, 7000); // 7000 milliseconds = 7 seconds
    });
  }
  
  // Call the function and wait for it to complete
  makeMeSlow().then(() => {
    console.log('Function execution completed.');
  });
  