/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {

    let n = matrix.length
    let size = matrix[0].length
    let left = 0
    let right = (size * n ) - 1

    while(left <= right) {
        let mid = left + Math.floor((right-left)/2)
        let matrixIndex = Math.floor(mid / size)

        let valInsideMatrix = matrix[matrixIndex][mid % size]

        if(valInsideMatrix === target) {
            return true
        } else if(valInsideMatrix > target) {
            right = mid -1
        } else {
            left = mid + 1
        }
    }
    return false
};

console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3))