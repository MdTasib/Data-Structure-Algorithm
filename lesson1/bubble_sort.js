// Sorting algorithm bubble sort ascending and descending

const numbers = [22, 12, 42, 1, 15, 47, 32, 35, 17, 45, 47, -1];

// small number to big number
function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        // console.log('i', array[i]);
        for (let j = 0; j < array.length; j++) {
            // console.log('j', array[j])
            if (array[j] > array[j + 1]) {
                // swap
                const temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
}

// bubbleSort(numbers);

const sorted = bubbleSort(numbers);
console.log(sorted);