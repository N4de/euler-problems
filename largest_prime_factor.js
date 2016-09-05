/*
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?
function actually tests numbers up to 1000 as instructed in the odin project
*/

var factor = 0;
var number = 600851475143;
for (var i = 1; i < 1000; i++) {
	if (number % i === 0) {
		factor = i;
		console.log(factor);
	}
}