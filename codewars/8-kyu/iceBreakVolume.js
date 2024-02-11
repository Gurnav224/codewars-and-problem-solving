

function iceBreakVolume(radius,bottle_length,rim_length){
  return (bottle_length-rim_length)*radius * 2* radius
}


console.log(iceBreakVolume(1,10,2))



//bottle length - rim length will give you the height of the brick = (brick height x width x depth)
//radius x 2 = width of the brick
//

//the bottle volume = volume = r squared x height x pi = 31.4
//radius = 1
//bottlelength = 10
//rimlength = 2 

//the brick volume = 16
//brick length = 8
//brick depth = 1 x 2 (double the radius)
//brick height = 1

//brick volume = 1150
//brick length = 23
//brick depth = 5 x 2 (double the radius)
//brick height = 5 