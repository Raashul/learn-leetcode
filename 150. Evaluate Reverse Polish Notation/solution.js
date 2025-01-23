/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let tokenArr = []

    tokens.forEach(token => {
        if(token === '+' || token === '-' || token === '*' || token === '/') {
            let number2 = tokenArr.pop()
            let number1 = tokenArr.pop()

            if(token === '+') {
                tokenArr.push(parseInt(number1 + number2))
            } else if(token === "*") {
                tokenArr.push(parseInt(number1 * number2))
            } else if(token === '-') {
                tokenArr.push(parseInt(number1 - number2))
            }  else if(token === '/') {
                tokenArr.push(parseInt(number1 / number2))
            }
        } else {
            tokenArr.push(parseInt(token))
        }
    })
    return tokenArr.pop()
};

console.log(evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"]))