/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let uniqueElementSet = new Set()
    let containsDuplicate = false
 
    for(const num of nums) {
        if(uniqueElementSet.has(num)) {
            containsDuplicate = true
            break;
        } else {
            uniqueElementSet.add(num)
        }
    }
    return containsDuplicate
};

