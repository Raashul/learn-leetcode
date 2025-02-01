/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
// var dailyTemperatures = function(temperatures) {
//     let stackArr = []
//     let result = new Array(temperatures.length).fill(0)
//     if(temperatures.length === 1) return [0]

//     stackArr.push(0) //insert first temp record
//     result[result.length-1] = 0

//     let index = 1
//     while(index < temperatures.length) {
//         let indexSaved = stackArr[stackArr.length-1]
//         let lastElement = temperatures[indexSaved] //TODO: fix

//         if(temperatures[index] > lastElement) {
//             while(stackArr.length > 0 && temperatures[index] > temperatures[stackArr[stackArr.length-1]]) {
//                 indexSaved = stackArr.pop()
//                 result[indexSaved] = index - indexSaved
//             } 
//             stackArr.push(index)
//         }
//         else {
//             stackArr.push(index)
//         }
//         index++
//     }
//     return result
// };


var dailyTemperatures = function(temperatures) {
    let stackArr = []
    let result = new Array(temperatures.length).fill(0)
    if(temperatures.length === 1) return [0]

    // stackArr.push(0) //insert first temp record
    // result[result.length-1] = 0

    let index = 0
    while(index < temperatures.length) {
        while(stackArr.length > 0 && temperatures[index] > temperatures[stackArr[stackArr.length-1]]) {
            let indexSaved = stackArr.pop()
            result[indexSaved] = index - indexSaved
        } 
        stackArr.push(index)
        index++
    }
    return result
};
