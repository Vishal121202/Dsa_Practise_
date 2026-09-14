function jumpSearch(arr, target) {
    const n = arr.length;
    const jump = Math.floor(Math.sqrt(n));

    let left = 0;
    let right = jump;

    // Find the block where target may exist
    while (left < n && arr[Math.min(right, n) - 1] < target) {
        left = right;
        right += jump;

        if (left >= n) {
            return -1;
        }
    }

    // Linear search inside the block
    while (left < Math.min(right, n)) {
        if (arr[left] === target) {
            return left;
        }

        if (arr[left] > target) {
            return -1;
        }

        left++;
    }

    return -1;
}