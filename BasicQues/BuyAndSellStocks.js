//Best time to buy and sell stocks
//given array prices where pricer[i] is price of a given stock on ith day
//coose one day to buy a stock and a different day in future to sell it in future to maximize profit
//if cannot achieve profit return 0
//Input Prices= [7, 1, 5, 3, 6, 4] ---> output: 5


const maxProfit = (prices) => {
    //BRUTE FORCE
    // let globalprofit = 0;
    // for(let i = 0; i < prices.length-1; i++){
    //     for(let j = i+1; j < prices.length; j++){
    //         const currentProfit = prices[j] - prices[i];
    //         console.log(`pricej:${prices[j]}, pricei:${prices[i]}, globalProfit: ${currentProfit}`);
            
    //         if(currentProfit > globalprofit) globalprofit = currentProfit;
    //     }
    // }


    //Optimized, GREEDY SOLUTION
    //[7, 1, 5, 3, 6, 4]
    //min = 7 ASSUME 7 is MINIMUM
    //Profit = 0
    //Now 1 < 7 so min = 1
    // as 1 - 7 is non profit return 0
    //Now min = 1
    //Profit = 5 - 1 = 5
    // do this till the profit is more than current
    let min = prices[0]
    let profit = 0;
    for(i = 0; i < prices.length; i++){
        if(prices[i] < min) min = prices[i]
        profit = Math.max(profit, prices[i] - min)
    }

    return profit
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
