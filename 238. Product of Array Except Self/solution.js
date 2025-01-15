/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let prefix = 1
    let postfix = 1

    let outputArr = Array(nums.length).fill(0) //or split into 2 array, prefix array and postfix array
    // let outputArr = [] //beat 93%
    
    for(let i =0; i < nums.length; i++) {
        outputArr[i] = prefix
        prefix = prefix * nums[i]
    }

    for(let i = nums.length-1; i >= 0; i--) {
        outputArr[i] = postfix * outputArr[i]
        postfix = postfix * nums[i]
    }
    return outputArr
};

console.log(productExceptSelf([-1,1,0,-3,3]))