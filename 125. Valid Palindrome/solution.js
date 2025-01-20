/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  
    let lowerCaseS = s.toLowerCase()
      // let isPalindrome = true
      let left = 0
      let right = s.length -1
  
      while(left < right) {
          //check left
          while(left < right && !isAlphanumeric(lowerCaseS.charAt(left))) {
              left++
          } 
          while(left < right && !isAlphanumeric(lowerCaseS.charAt(right))) {
              right--
          } 
       
          if(lowerCaseS.charAt(left) !== lowerCaseS.charAt(right)) return false
          left++
          right--
      }
  
      return true
  };
  
  function isAlphanumeric(char) {
    return (char >= 'a' && char <= 'z') || 
            (char >= '0' && char <= '9');
  
  }
