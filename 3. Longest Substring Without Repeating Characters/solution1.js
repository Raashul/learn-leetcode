/*
    Input: s = "abcabcbb"
    Output: 3
    Explanation: The answer is "abc", with the length of 3.

*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {


    let firstPointer = 0
    let secondPointer = 0
    let uniqueElements = new Set()
    // let longestSub = ""
    let maxLength = 0


    while(secondPointer < s.length) {
        
        //base condition
        if(firstPointer === secondPointer) {
            uniqueElements.add(s.charAt(firstPointer))
            secondPointer++
        }

        else if(!uniqueElements.has(s.charAt(secondPointer))) {
            uniqueElements.add(s.charAt(secondPointer))
            secondPointer++
        }

        else {
            maxLength = Math.max(maxLength, uniqueElements.size)
            uniqueElements.delete(s.charAt(firstPointer))
            firstPointer++
        }

        maxLength = Math.max(maxLength, uniqueElements.size)

    }

    return maxLength
    
};