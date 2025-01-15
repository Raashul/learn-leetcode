/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {

    const mapping = {}
    let result = []

        //loop over array str
    for(const str of strs) {
        let arrStr = Array(26).fill(0) //initialize with 0
        //loop over characters
        for(const chars of str) {
            arrStr[chars.charCodeAt(0)-'a'.charCodeAt(0)]++
        }

        let computeString = ""

        arrStr.forEach((count, index) => {
            while(count != 0) {
                computeString += String.fromCharCode(97 + index)
                count--   
            }
                
        })

        if(!mapping[computeString]) {
            mapping[computeString] = [] 
        }
        mapping[computeString].push(str)
    }
    for(const key in mapping) {
        result.push(mapping[key])
    }
};

  groupAnagrams(["ddddddddddg","dgggggggggg"])