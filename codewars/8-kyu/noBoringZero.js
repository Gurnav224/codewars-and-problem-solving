

    function noBoringZero(n){
        let str = n.toString()
       str = str.replace(/0+$/,"")
       return str === ""?"0":str
    }

    console.log(noBoringZero(1450))
    console.log(noBoringZero(120000))