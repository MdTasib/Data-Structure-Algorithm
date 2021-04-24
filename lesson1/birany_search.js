const numbers = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39];

function binarySearch(array, target) {
    let start = 0;
    let end = array.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (array[mid] === target) {
            console.log('Item found in position', mid);
            return mid;
        }
        if (array[mid] < target) {
            start = mid + 1;
        }
        if (array[mid] > target) {
            end = mid - 1;
        }
    }
    return -1;
}

const element = binarySearch(numbers, 23);
console.log(element);