/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let maxK = Math.max(...piles)
    let minK = 1
    
    let resK = Number.MAX_VALUE

    while(minK <= maxK) {
        let midK = minK + Math.floor((maxK-minK) /2)
        let totalHours = 0
        for(let i = 0; i< piles.length; i++) {
            totalHours += Math.ceil(piles[i] / midK)
        }

        if(totalHours <= h) {
            resK = midK
            maxK = midK - 1
        } else {
            minK = midK + 1
        }
        
    }
    return resK
};

console.log(minEatingSpeed( [30,11,23,4,20], 5))