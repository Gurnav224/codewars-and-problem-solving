function equableTriangle(a,b,c) {
    //Your code here!
     if(a > 0 && b > 0 && c > 0 ){
        const perimeter = a + b + c;
        s = perimeter/2
        const area = Math.sqrt((s*(s-a)*(s-b)*(s-c)))

        return perimeter ===area
     }
     return false
    }

    console.log(equableTriangle(5,12,13))