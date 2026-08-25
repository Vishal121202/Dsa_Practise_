/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let start = 0;
    let end = 0;

    function expand(left, right) {
        while (
            left >= 0 &&
            right < s.length &&
            s[left] === s[right]
        ) {
            left--;
            right++;
        }

        // Return the actual palindrome length
        return right - left - 1;
    }

    for (let i = 0; i < s.length; i++) {
        // Odd-length palindrome
        const odd = expand(i, i);

        // Even-length palindrome
        const even = expand(i, i + 1);

        const len = Math.max(odd, even);

        if (len > end - start + 1) {
            start = i - Math.floor((len - 1) / 2);
            end = i + Math.floor(len / 2);
        }
    }

    return s.substring(start, end + 1);
};