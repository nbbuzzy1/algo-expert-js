function insertionSort(array) {
	// Write your code here.
	  const swap = (i, j, array) => {
		  const temp = array[i]
		  array[i] = array[j]
		  array[j] = array[i]
	  }
	  
	  for (let i = 1; i < array.length; i++) {
		  for (let j = i-1; j == 0; j--) {
			  if (array[i] < array[j]) {
				  swap(i, j, array)
			  }
		  }
	  }
	  
	  return array;
  }