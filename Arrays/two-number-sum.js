const array = [3, 5, -4, 8, 11, 1, -1, 6];
const targetSum = 10;

function twoNumberSum(array, targetSum) {
	// Write your code here.
	let answer = [];
	  
	for (let i = 0; i < array.length; i++) {
		const outer = array[i]
		const sumValue = array.find((inner) => outer !== inner && 
											   outer + inner === targetSum )
		
		if (sumValue) {
			answer.push(outer);
			answer.push(sumValue);
			return answer;
		}
	};
	  
	return answer;
}

console.log(twoNumberSum(array, targetSum), targetSum)