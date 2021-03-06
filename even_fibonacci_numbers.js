/*
Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.
*/

var fibo = function() {
	var sum = 0;
	var list = [];
	var k = 1;
	var j = 2;
	while(j < 1000 && k < 1000) {
		sum += j
		sum += k
		k = j + k;
		j = j + k;

	} 
	console.log(sum);	
}