const number = 200
// console.log(number);

const num = new Number(100.3234)
// console.log(num)

// console.log(num.toString().length)
// console.log(num.toFixed(2))

const num1 = 223.321
// console.log(num1.toPrecision(5))

const num2 = 1000000
// console.log(num2.toLocaleString('en-IN'))

// +++++++++++++++ MATHS ++++++++++++++++

// console.log(Math)
// console.log(Math.abs(-21)) //21
// console.log(Math.round(4.6)); // 5
// console.log(Math.ceil(4.6)) // 5
// console.log(Math.floor(4.8)) // 4
// console.log(Math.sqrt(9)) // 3
// console.log(Math.min(3,2,1,4,5)) // 1
// console.log(Math.max(2,3,1,3,5,6)) // 6
// console.log(Math.random()) // Any random value between 0 and 1 

// console.log(Math.floor(Math.random()*10) + 1) // values between 1 to 10 not a 0

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min)
