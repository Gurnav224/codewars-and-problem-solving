

function getMax1()
{
  var max = 
  {
   name: 'Max Headroom'
  }
  return max;
}

function getMax2()
{
  return {
    name: 'Max Headroom'
  }
}

console.log(JSON.stringify(getMax1())==JSON.stringify(getMax2()))