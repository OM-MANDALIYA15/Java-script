// Implicit type comversion means automatically convert one data type to another data type
let a ="10" + 5 // 10 is a string and 5 is integer so string are concatneted and final answer is 105
console.log(a); // and this is called implicit type conversion

let b = "10" - 5
console.log(b) // - is a numeric operator

console.log(true  + 1) // true => 1
console.log(false + 2) // false => 0

console.log(null + 1) // null is converted with 0

// Explicit type conversion means manually covert one data type to anothr data type using built in function

let c = "100"  // convert to number
let d = Number(c)
console.log(d);
console.log(typeof d);

let e = "100" // convert to sring
let str =String(e)
console.log(str)
console.log(typeof str)

let f = "hello" // convert to Boolean
let str1 = Boolean(f)
console.log(str1)
console.log(typeof str1)

console.log(Boolean(0))  // convert to boolean
console.log(Boolean(1))
console.log(Boolean("om"))
console.log(Boolean(""))





