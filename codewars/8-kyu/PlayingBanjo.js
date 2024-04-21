

function areYouPlayingBanjo(name) {
    // Implement me
    if(name.startsWith('R') || name.startsWith('r')){

        return name + " plays banjo" 
    }
    else{
        return name + " does not play banjo"
    }
  }


  console.log(areYouPlayingBanjo("Riya"))
  console.log(areYouPlayingBanjo("vikash"))
  console.log(areYouPlayingBanjo("rahul"))