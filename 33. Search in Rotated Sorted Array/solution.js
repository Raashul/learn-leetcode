/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0
    let right = nums.length -1

    while(left <= right) {
        let mid = left + Math.floor((right-left) / 2) //handle overflow
        if(nums[mid] === target) return mid
        //find pivot
        if(nums[mid] > nums[left]) { //sorted
            if(target >= nums[left] && target <= nums[mid]) {
                //is in the left side of pivot
                right = mid -1
            } else {
                left = mid + 1
            }
        } else {
            if(left === right || left == mid) {
                left = mid +1 //it is in the right side
                right = nums.length-1
            } 
            else right = mid -1
        }
    }

    return -1 //not found
};

console.log(search([1,2], 2))