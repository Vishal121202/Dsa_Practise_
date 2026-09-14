// This approach is used to find the best possible range for the target, after which binary search is applied to complete the process.
function exponentialSearch(arr, target) {
    const n = arr.length;

    if (n === 0) {
        return -1;
    }

    if (arr[0] === target) {
        return 0;
    }

    let i = 1;

    // Find the range
    while (i < n && arr[i] <= target) {
        i *= 2;
    }

    // Binary search within the range
    let left = Math.floor(i / 2);
    let right = Math.min(i, n - 1);

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid;
        }

        if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
}