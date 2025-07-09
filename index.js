console.log('start');

// 1. find 2 number pair who's sum is zero

const numbers = [-9, -8, -7, -5, 0, 5, 7, 6, 1];
const pairs = [];
for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
        if (numbers[i] + numbers[j] === 0) {
            pairs.push([numbers[i], numbers[j]]);
        }
    }
}

console.log(pairs) //  [ [ -7, 7 ], [ -5, 5 ] ]

// 2. Guess the output of map method

const outputNumbers = numbers.map((num) => {
    num * 2
});
console.log(outputNumbers);
// 
// [
//     undefined, undefined,
//     undefined, undefined,
//     undefined, undefined,
//     undefined, undefined,
//     undefined
//   ]

// 3. write a code to reverse the string

const myName = 'nikhil';
const myNameArray = [];
// for (let i = myName.length - 1; i >= 0; i--) {
//     const element = myName[i];
//     myNameArray.push(element);
// }
for (let i = 0; i < myName.length; i++) {
    const element = myName[i];
    myNameArray.unshift(element)
}

// forEach only iterates array not string;
// push insert element in from last
// unshift insert element in from first

const reversedstring = myNameArray.join("");
console.log(reversedstring); //lihkin

// 4. group students on basis on age

const students = [
    {
        name: "nikhil",
        age: 29,
        address: "ghatkopar"
    },
    {
        name: "krishna",
        age: 29,
        address: "ghatkopar"
    },
    {
        name: "akshay",
        age: 31,
        address: "ghatkopar"
    }, {
        name: "vicky",
        age: 28,
        address: "diva"
    }
]

let groupbystudent = {};
for (let index = 0; index < students.length; index++) {
    const element = students[index];
    if (!groupbystudent[element.age]) {
        groupbystudent[element.age] = [];
    }
    groupbystudent[element.age].push(element)
}
console.log(groupbystudent);
// {
//     '28': [ { name: 'vicky', age: 28, address: 'diva' } ],
//     '29': [
//       { name: 'nikhil', age: 29, address: 'ghatkopar' },
//       { name: 'krishna', age: 29, address: 'ghatkopar' }
//     ],
//     '31': [ { name: 'akshay', age: 31, address: 'ghatkopar' } ]
// }

// 5. 
function abc() {
    console.log(abc.xyz);
}
abc();
abc.xyz = 200;
abc.xyz = 300;
abc();
const numbers1 = [1, 2, 4, 5];
numbers1[100] = 6;
// console.log(numbers1);
// [ 1, 2, 4, 5, <96 empty items>, 6 ] empty items undefined(not sure)

console.log(typeof typeof 100); //type of 100 is number which will printed as string "number" so its type will become string
console.log([...'nikhil']); //[ 'n', 'i', 'k', 'h', 'i', 'l' ]
const checkMap = [1, 2, 3, 4].map((x) => x > 2);
console.log(checkMap); //[ false, false, true, true ]


//6. Sorting an array

const unSortedArray = [5, 2, 7, 9, 1];
const unSortedArrayLength = unSortedArray.length;

for (let i = 0; i < unSortedArray.length; i++) {
    for (let j = 0; j < unSortedArray.length; j++) {
        if (unSortedArray[j] > unSortedArray[j + 1]) {
            //swap
            let temp = unSortedArray[j];
            unSortedArray[j] = unSortedArray[j + 1];
            unSortedArray[j + 1] = temp;
        }
    }
}

console.log(unSortedArray);

//7. multiply number without using * operator
function multiply(num1, num2) {
    let result;
    for (let i = 0; i < num2; i++) {
        result = ++num1;
    }
    return result
}
console.log(multiply(2, 4));

//8. i++ vs ++i 
// ++i = increment value then assign 
// i++ = assign value then increment 

// 9. palindrome => level
const palindrome = 'level';
let start, end, mid;
mid = palindrome.length / 2
mid = Math.floor(mid);
// console.log(mid);
end = palindrome.length - 1;
start = 0;
while (end > start) {
    if (palindrome[end] === palindrome[start]) {
        console.log('its an palindrome');
    } else {
        console.log('not an palindrome');
    }
    start++
    end--
}
let x = 1, y = 1
console.log('i++ 1', x++) // 1 => assigned 1 then increment to 2
console.log('i++ 1', x++) // 2 => returned 2 then increment to 3
console.log('++i 2', ++y) // 2 
console.log('++i 3', ++y) // 3

console.log(2 + '2'); // 22
console.log(2 + +'2'); // 4 
console.log(2 + '2'); // 22 
console.log(+"2" + 2); // 4
console.log(-"2" - 2); // 0

// 10. flaten an array using recurssion
const arr1 = [10, 12, [12, 99, 33], 89, [56, 55]];
let flanttendArrays = [];
function flattenArray(data) {
    for (let i = 0; i < data.length; i++) {
        if (Array.isArray(data[i])) {
            flattenArray(data[i]);
        } else {
            flanttendArrays.push(data[i])
        }
    }
}

flattenArray(arr1)
console.log(flanttendArrays);



// 10.find max occuring number from an array

