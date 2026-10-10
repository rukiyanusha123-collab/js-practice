
const numbers = [40, 10, 30, 20];

numbers.sort((a, b) => {
    return a - b;
});

console.log("Ascending:", numbers);

numbers.sort((a, b) => {
    return b - a;
});

console.log("Descending:", numbers);
