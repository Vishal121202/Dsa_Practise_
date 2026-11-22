var canConstruct = function(ransomNote, magazine) {
    const freq = {};

    // Count characters in magazine
    for (const char of magazine) {
        freq[char] = (freq[char] || 0) + 1;
    }

    // Check if ransomNote can be constructed
    for (const char of ransomNote) {
        if (!freq[char]) {
            return false;
        }

        freq[char]--;
    }

    return true;
};