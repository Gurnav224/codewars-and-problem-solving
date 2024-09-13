

function scramble(str, arr){
    var r = []
   for( var i=0;  i < arr.length; i++){
    r[arr[i]] = str[i];
   }
   return r.join("")

}


console.log(scramble('abcd',[0,3,1,2]))
// acdb
                                                                                                                                                                                          