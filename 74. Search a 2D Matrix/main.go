package main

import "fmt"

func main() {
	fmt.Println(searchMatrix([][]int{
		{1, 3, 5, 7},
		{10, 11, 16, 20},
		{23, 30, 34, 60},
	}, 100))
}
func searchMatrix(matrix [][]int, target int) bool {
	size := len(matrix)
	matrixLength := len(matrix[0])

	right := (matrixLength * size) - 1
	left := 0

	for left <= right {
		mid := left + (right-left)/2
		selectedMatrix := matrix[mid/matrixLength]
		selectedVal := selectedMatrix[mid%matrixLength]

		if selectedVal == target {
			return true
		} else if selectedVal > target {
			right = mid - 1
		} else {
			left = mid + 1
		}

	}
	return false
}
