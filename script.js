/////////////Find Largest Number///////////////////////
function findMax() {
    let arr = [12, 45, 8, 90, 32];
    let max = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    console.log(max);
}

findMax();
/////////////////Find odd and Even///////////////////////
function countEvenOdd() {
    let numbers2 = [12, 45, 8, 90, 32];

    let evenCount = 0;
    let oddCount = 0;

    for (let i = 0; i < numbers2.length; i++) {
        if (numbers2[i] % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }

    console.log("Even =", evenCount);
    console.log("Odd =", oddCount);
}

countEvenOdd();
/////////////////Find Positive and Negative//////////////////////
function getPositives() {
    let numbers3 = [5, -2, 10, -8, 15, -1];
    let positiveNumbers = [];

    for (let i = 0; i < numbers3.length; i++) {
        if (numbers3[i] > 0) {
            positiveNumbers.push(numbers3[i]);
        }
    }

    console.log(positiveNumbers);
}

getPositives();
//////////////////////Reverse Array///////////////////////////
function reverseArray() {
    let numbers4 = [10, 20, 30, 40, 50];
    let reversedNumbers = [];

    for (let i = numbers4.length - 1; i >= 0; i--) {
        reversedNumbers.push(numbers4[i]);
    }

    console.log(reversedNumbers);
}

reverseArray();
///////////////////////Remove Duplicates/////////////////
function removeDuplicates() {
    let numbers5 = [10, 20, 10, 30, 20, 40];
    let uniqueNumbers = [];

    for (let i = 0; i < numbers5.length; i++) {

        if (!uniqueNumbers.includes(numbers5[i])) {
            uniqueNumbers.push(numbers5[i]);
        }

    }

    console.log(uniqueNumbers);
}

removeDuplicates();