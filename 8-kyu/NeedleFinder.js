function findNeedle(haystack) {
    // your code here
    // for(let i=0; i<haystack.length; i++){
    //     if(haystack[i]==="needle"){
    //         return "found the needle at position "+ i
    //     }
    // }
return  "found the needle at position "+haystack.indexOf("needle")
}


  console.log(findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]))
  console.log(findNeedle(['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false]))