/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0
    let right = nums.length - 1

    while(left <= right) {
        let mid = left + Math.floor((right - left) / 2);
        if(nums[mid] === target) {
            return mid
        } else if(nums[mid] > target) {
            right = mid -1
        } else {
            left = mid+1
        }
    }
    return -1
};


//recursive
function binarySearchRecursive(arr, target, left, right) {
    // Base case: if left index exceeds right, target is not in the array
    if (left > right) {
        return -1;
    }

    // Calculate middle index
    let mid = left + Math.floor((right - left) / 2);

    // If target is found, return the index
    if (arr[mid] === target) {
        return mid;
    } else if (arr[mid] < target) {
        // Search in the right half
        return binarySearchRecursive(arr, target, mid + 1, right);
    } else {
        // Search in the left half
        return binarySearchRecursive(arr, target, left, mid - 1);
    }
}

// Wrapper function for convenience
function binarySearch(arr, target) {
    return binarySearchRecursive(arr, target, 0, arr.length - 1);
}

