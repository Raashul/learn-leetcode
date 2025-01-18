//time limit exceeded
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let mapping = new Map()
    let result = []
    nums.forEach((num, index) => {
        if(mapping.get(num)) {
            mapping.set(mapping.get(num).add(index))
        } else {
            mapping.set(num, new Set([index]));
        }
    })
    for(let i =0; i < nums.length; i++) {
        for(let j=1; i != j && j < nums.length; j++) {
            let sum = nums[i] + nums[j]
            let requiredVal = 0 - sum
            //check if required is in mapping
            if(mapping.get(requiredVal)) {
                //check is repeat index
                let tempSet = mapping.get(requiredVal)
                for(const item of tempSet) {
                    if(item != i && item !== j) {
                        let triplet = [nums[i], nums[j], nums[item]].sort((a, b) => a - b);
                        if (!result.some(t => t[0] === triplet[0] && t[1] === triplet[1] && t[2] === triplet[2])) {
                            result.push(triplet);
                        }
                    }
                }
            }
        }
    }
    return result

};