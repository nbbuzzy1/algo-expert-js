// Write a function that takes in an array of integers and returns a sorted
// version of that array. Use the Quick Sort algorithm to sort the array.

// If you're unfamiliar with Quick Sort, we recommend watching the Conceptual
// Overview section of this question's video explanation before starting to code.

// Sample Input
// array = [8, 5, 2, 9, 5, 6, 3]

// Sample Output
// [2, 3, 5, 5, 6, 8, 9]

function quickSort(array) {
	// Write your code here.
	quickSortHelper(array, 0, array.length - 1)
	return array
  }
  
function quickSortHelper(array, startIdx, endIdx) {
	if (startIdx >= endIdx) {
		return
	}
	pivotIdx = startIdx
	leftIdx = startIdx + 1
	rightIdx = endIdx
	
	while (rightIdx >= leftIdx) {
		if (array[leftIdx] > array[pivotIdx] && array[rightIdx] < array[pivotIdx]) {
			swap(leftIdx, rightIdx, array)
		}
		
		if (array[leftIdx] <= array [pivotIdx]) {
			leftIdx++
		}
		
		if (array[rightIdx] >= array[pivotIdx]) {
			rightIdx--
		}
	}
	
	swap(pivotIdx, rightIdx, array)
	
	leftSubarrayIsSmaller = (rightIdx - 1 - startIdx) < endIdx - (rightIdx + 1) 
	
	if (leftSubarrayIsSmaller) {
		quickSortHelper(array, startIdx, rightIdx - 1)
		quickSortHelper(array, rightIdx + 1, endIdx)
	} else {
		quickSortHelper(array, rightIdx + 1, endIdx)
		quickSortHelper(array, startIdx, rightIdx - 1)
	}
}

function swap(i, j, array) {
	const temp = array[i];
	array[i] = array[j];
	array[j] = temp;
}
  