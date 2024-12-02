function pyramid(s) {
    // return: [vertices, edged, faces, sides]

    let sides = (s-2)/4;

    let vertices = sides+1;
    let edges = sides*2;
    let face = sides +1;


    return [vertices , edges,face,sides];
  }


  console.log(pyramid(42))