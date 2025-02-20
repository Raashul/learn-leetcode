/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */


//brute force
// var characterReplacement = function(s, k) {
//     let res = 0
//     for(let i =0; i < s.length; i++) {
//         let map = new Map()
//         let tempMax = 0
//         for(j=i; j < s.length; j++) {
//             map.set(s[j], (map.get(s[j]) || 0) + 1)
//             tempMax = Math.max(tempMax, map.get(s[j]))
 
//             //check length
//             if((j-i +1) - tempMax <= k) {
//                 res = Math.max(res, j-i+1)
//             }
//         }
//     }
//     return res
// };


var characterReplacement = function(s, k) {
    let left =0
    let res = 0
    let tempMax = 0
    let map = new Map()

    for(let right = 0; right < s.length; right++) {
        map.set(s[right], (map.get(s[right]) || 0) + 1)
        tempMax = Math.max(tempMax, map.get(s[right]))

        if((right-left + 1) - tempMax > k) {
            map.set(s[left], map.get(s[left]) -1)
            left++
        }
        res = Math.max(res, right-left+1)
    }
 
};