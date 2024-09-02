

function reverseSlice(str) {

    const arr = str.split('')

    // console.log(arr)

    // let groupArr = []

    // for(let i=0; i<arr.length; i++){
        
    //     groupArr.push(arr.slice(0, i+1).join(''))


    // }

    // return groupArr.reverse()


    // return arr.map((_ , index ,array)=> array.slice(0,index+1).join('')).reverse()

   return  arr.map((_ , index ,array)=> array.slice(0,index+1).reverse().join('')).reverse()
  }


  console.log(reverseSlice('123'))

  console.log(reverseSlice('abcde'))


//   '123'   ==>  ['321', '21', '1']
// 'abcde' ==>  ['edcba', 'dcba', 'cba', 'ba', 'a']