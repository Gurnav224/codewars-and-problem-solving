

function maxProfit(prices){

    let minPrice = prices[0];
    let maxPrice = 0;

    for(let i=0; i<prices.length; i++){
        const currentPrice = prices[i];

        minPrice = Math.min(minPrice,currentPrice);

        const potentailProfit = currentPrice- minPrice;

        maxPrice = Math.max(maxPrice,potentailProfit)
    }
return maxPrice
}

const prices = [7, 1, 5, 3, 6, 4];
const profit = maxProfit(prices);
console.log("Maximum profit:", profit);