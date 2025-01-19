class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encodedStr = ""
        strs.forEach(s => {
            let len = s.length
            encodedStr += len + "#" + s
        })
        return encodedStr
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        
        let finalStr = ""
        let initialIndex = 0
        let index = 0
        let results = []
        while(index < str.length) {
            if(str.charAt(index) == "#") {
                //check if previous character is a number
                if(index > 0 && Number(str.charAt(index-1)) != NaN) {
                    let len = parseInt(str.substring(initialIndex, index))
                    finalStr = str.substring(index+1, index + 1 + len)
                    results.push(finalStr)
                    index = index + len + 1
                    initialIndex = index
                } else {
                    index++
                }
              
            } else {
                index++
            }
        }
        return results

    }
}


test = new Solution()
const encoded = test.encode(["my", "#name", "i##s", "rashul"])
const decode = test.decode(encoded)
