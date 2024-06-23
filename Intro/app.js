function insertionSort(arr) {
  // Loop through each element of the array (except the first one)
  for (let i = 1; i < arr.length; i++) {
    // Pick the element at index i (current element)
    let current = arr[i];
    // Loop through the sorted portion of the array (elements before i)
    let j = i - 1;

    // Shift elements of the sorted portion greater than current to the right
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }

    // Insert the current element at its correct position
    arr[j + 1] = current;
  }

  return arr;
}

// Example usage
const myArray = [5, 2, 9, 1, 6];
const sortedArray = insertionSort(myArray);
console.log(sortedArray); // Output: [1, 2, 5, 6, 9]
