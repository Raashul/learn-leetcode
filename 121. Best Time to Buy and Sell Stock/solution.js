/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if(prices.length < 2) return 0
    
    let buyPrice = Number.MAX_VALUE
    let sellPrice = Number.MIN_VALUE
    let profit = 0
    prices.forEach(currentValue => {
        if(currentValue < buyPrice) {
            buyPrice = currentValue
            sellPrice = Number.MIN_VALUE
        } else if(currentValue > sellPrice) {
            sellPrice = currentValue
            profit = Math.max(profit, sellPrice-buyPrice)
        }
    })  

    return profit
};