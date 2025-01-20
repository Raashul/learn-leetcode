/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let left = 0
    let right = numbers.length -1
    let result = []
    while(left < right) {
        if(numbers[left] + numbers[right] == target) {
            result = [left+1, right+1]
            break
        } else if (numbers[left] + numbers[right] > target) {
            right--
        } else {
            left++
        }
    }
    return result
};

//binary search
// var twoSum = function(numbers, target) {
//     for (let i = 0; i < numbers.length; i++) {
//         let l = i + 1, r = numbers.length - 1;
//         let tmp = target - numbers[i];
//         while (l <= r) {
//             let mid = l + Math.floor((r - l) / 2);
//             if (numbers[mid] === tmp) {
//                 return [i + 1, mid + 1];
//             } else if (numbers[mid] < tmp) {
//                 l = mid + 1;
//             } else {
//                 r = mid - 1;
//             }
//         }
//     }
//     return [];
// }

console.log(twoSum([-1,0], -1))