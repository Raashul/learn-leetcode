/**
 * @param {number} n
 * @return {string[]}
 */

var generateParenthesis = function(n) { 
    let result = new Set(["()"]);
    let index = 1;

    while(index < n) {
        let temp = new Set();
        result.forEach(res => {
            for(let i = 0; i < res.length; i++) {
                if(res.charAt(i) == '(') {
                    let tempStr = res.substring(0, i+1) + "()" + res.substring(i+1, res.length);
                    temp.add(tempStr);
                }
            }
            temp.add("()" + res);
            temp.add(res + "()");
            result.delete(res);
        });
        result = temp; // Update `result` with `temp`
        index++;  // Increment index to avoid infinite loop
    }

    return Array.from(result)
};

console.log('generateParenthesis', generateParenthesis(3))