function cockroachSpeed(s) {
    //Good Luck!
    const speedConversion = 100000/3600
    return Math.floor(s*speedConversion)
  }

  console.log(cockroachSpeed(1.08))