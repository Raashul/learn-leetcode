/**
 * @param {number[]} height
 * @return {number}
 */

//brute force
// var maxArea = function(height) {
//     let maxArea = 0
//     for(let i =0; i < height.length -1; i++) {
//         for(let j=i+1; j < height.length; j++) {
//             let width = j - i
//             let tempHeight = Math.min(height[i], height[j])

//             let area = width * tempHeight
//             maxArea = Math.max(area, maxArea)
//         }
//     }
//     return maxArea
// };

var maxArea = function(height) {
    let maxArea = 0
    let left = 0
    let right = height.length -1 
    while(left < right) {
        let h = Math.min(height[left], height[right])
        let width = right - left
        maxArea = Math.max(maxArea, h * width)

        if(height[left] < height[right]) { //i want to keep using left because left has a larger value
            left++
        } else {
            right--
        }
    }
    return maxArea
};



console.log(maxArea([1,7,2,5,4,7,3,6]))