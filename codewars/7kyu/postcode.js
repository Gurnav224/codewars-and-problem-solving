

function whichPostcode(postcode){
    postcode = postcode.trim()
    const pattern = /^[a-zA-Z]{1,2}\d{1,2} \d[a-zA-Z]{2}$/;;
    const pattern2 = /^\d{3} \d{2}$/;
    if(pattern.test(postcode)){

        return "GB"

    }


    if(pattern2.test(postcode)){
        return "SK"
    }


    return "Not valid";
  }

  console.log(whichPostcode("DN1 1AA"))
  console.log(whichPostcode("Se21 7aA"))

  console.log(whichPostcode("  810 08"))