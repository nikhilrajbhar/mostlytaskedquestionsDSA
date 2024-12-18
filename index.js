console.log('start');

// 1. find 2 number pair who's sum is zero

const numbers = [-9, -8, -7, -5, 0 , 5 , 7, 6, 1]
const outputPairs1 = [];
const outputPairs2 = [];

numbers.forEach((x) => {
    numbers.forEach((y) => {
        if ((x+y) === 0) {
            if ((x && y) === 0) return;
            outputPairs1.push(x)
        }
    })
});
for (let index = 0; index < numbers.length; index++) {
    const element1 = numbers[index];
    for (let j = 1; j < numbers.length; j++) {
        const element2 = numbers[j];
        if ((element1 + element2) === 0) {
            if ((element1 && element2) !== 0){
                outputPairs2.push(element1);
            }
        }
    }
}
// console.log(outputPairs1);
console.log(outputPairs2);

// 2. Guess the output of map method
const outputNumbers = numbers.map((num) => {
    num*2
});
console.log(outputNumbers);


  