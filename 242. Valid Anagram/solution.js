/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length != t.length) return false
    let mapping = new Map()
    for(let c of s) {
        mapping[c] = mapping== null ? 1 : mapping[c] + 1
    }
    for(let c of t) {
        if(!mapping[c]) return false
        if(mapping[c] === 0) return false
        mapping[c] = mapping[c] -1

    }
    
    for(const [key,val] of mapping) {
        if(mapping[key] != 0) return false
    }
    return true
};

//faster solution
var isAnagram = function(s, t) {
    if(s.length != t.length) return false
    let arr = Array(26).fill(0)

   for(let i =0; i < s.length; i++) {
        arr[s[i].charCodeAt(0)- 'a'.charCodeAt(0)]++
        arr[t[i].charCodeAt(0)- 'a'.charCodeAt(0)]--
   }

   for(let i =0; i < arr.length; i++) {
    if(arr[i] != 0) return false
   }
   return true
};

