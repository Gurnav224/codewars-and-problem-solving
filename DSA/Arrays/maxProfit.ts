


function max_profit(arr:number[]):number{
  let min_price: number = arr[0];
  let maxProfit = 0;
  
  for (let i: number = 0; i < arr.length; i++){
    const currentPrices = prices[i];
    
    min_price = Math.min(min_price, currentPrices);
    
    const potential_profit = currentPrices - min_price;
    
    maxProfit = Math.max(maxProfit,potential_profit)
    
  }
  return maxProfit
}

const prices:number[] = [7, 1, 5, 3, 6, 4];
console.log(max_profit(prices))