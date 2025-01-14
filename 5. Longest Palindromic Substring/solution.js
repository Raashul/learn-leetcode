//https://leetcode.com/problems/longest-palindromic-substring/solutions/3598120/longest-palindromic-substring/?envType=problem-list-v2&envId=rabvlt31

/**
 * @param {string} s
 * @return {string}
 */

function longestPalindrome(s) {
    const n = s.length;
  
    if (n <= 1) {
      return s;
    }
  
    let start = 0;
    let maxLength = 1;
  
    function expandAroundCenter(left, right) {
      while (left >= 0 && right < n && s[left] === s[right]) {
        left--;
        right++;
      }
      return right - left - 1;
    }
  
    for (let i = 0; i < n; i++) {
      const len1 = expandAroundCenter(i, i);
      const len2 = expandAroundCenter(i, i + 1);
      const currLen = Math.max(len1, len2);
  
      if (currLen > maxLength) {
        maxLength = currLen;
        start = i - Math.floor((currLen - 1) / 2);
      }
    }
  
    return s.substring(start, start + maxLength);
  }