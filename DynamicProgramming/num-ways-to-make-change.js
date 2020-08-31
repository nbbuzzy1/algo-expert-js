
//   Given an array of distinct positive integers representing coin denominations and a
//   single non-negative integer representing a target amount of
//   money, write a function that returns the number of ways to make change for
//   that target amount using the given coin denominations.

// Note that an unlimited amount of coins is at your disposal.

// Sample Input
// 6
// denoms = [1, 5]

// Sample Output
// 2 // 1x1 + 1x5 and 6x1</span>

function numberOfWaysToMakeChange(n, denoms) {
	// Write your code here.
	  let num = 0;
	  let denomHash = {};
	  denoms.forEach((denom) => denomHash[denom] = true)
	  
	  denoms.forEach((denom) => {
		  if (n % denom === 0) {
			  num++;
		  }
		  
		  let i = denom;
		  while (i < n) {
			  const difference = n - i;
			  console.log(difference, i , denomHash);
			  if (denomHash[difference]) {
				  num++;
			  }
			  i+=denom;
		  }
	  });
	  console.log(num)
	  return num;
  }