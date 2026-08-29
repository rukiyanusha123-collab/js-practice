let arr = [1, 2, 2, 3, 4, 4, 5];

let result = [...new Set(arr)];

console.log(result);
////////////////////
let str = "javascript";
let count = 0;

for (let char of str) {
  if ("aeiou".includes(char)) {
    count++;
  }
}

console.log(count);
///////////////////
let num = 7;

if (num % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}
///////////////////////////////
