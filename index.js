console.log('start');

// 1. find 2 number pair who's sum is zero

const numbers = [-9, -8, -7, -5, 0 , 5 , 7, 6, 1]
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
    num*2
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

// 4. map
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
    },    {
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

