/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */


var topKFrequent = function(nums, k) {
    let arr = []
    let kk = 0
    while(kk <= k) {
        arr.push([])
        kk++
    }

    let mapping = {}
    nums.forEach(num => {
        mapping[num] = mapping[num] === undefined ? 1 : mapping[num] + 1
    })

    for(const key in mapping) {
        const tempArr = arr[mapping[key]-1]
        tempArr.push(parseInt(key))
        arr[mapping[key]-1] = [...tempArr]
    }

    let result = []
    let index = arr.length -1

    while(index >= 0) {
        if(!arr[index].length !== 0) {
            result.push(...arr[index])
            index--;

            if(result.length === k) break
        }
    }

    return result

};

console.log(topKFrequent([1,1,1,2,2,3], 2))