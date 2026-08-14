
//////////////////Array-Sum of even num///////////////////////
const numbers = [1, 2, 3, 4, 5, 6];

const evenNumbers = numbers.filter(num => num % 2 === 0);

const sum = evenNumbers.reduce((total, num) => total + num, 0);

console.log(sum);

////////////////////String – Count Vowels////////////////////
const str = "javascript";

let count = 0;

for (let char of str) {
  if ("aeiou".includes(char)) {
    count++;
  }
}

console.log(count);