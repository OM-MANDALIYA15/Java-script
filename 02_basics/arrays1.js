const name = ["om","virat","kohli"]
const name1 = ["rohit" , "sharma"]

// name.push(name1)
// console.log(name)
// console.log(name[3][0])  // rohit

// const name2 = name.concat(name1)
// console.log(name2)

// const name3 = [...name,...name1]
// console.log(name3)

const name4 = [1,2,3,[4,5,6,[5,6,7]]]
const name5 = name4.flat(10)
console.log(name5) 

console.log(Array.isArray(['om','mandaliya'])) // true
// Array.isArray() in JavaScript is used to check whether a value is an array or not.

console.log(Array.from("om"))
console.log(Array.from({name:"om"})) // does not return any value

let s1 = 10
let s2 = 20
let s3 = 30
console.log(Array.of(s1,s2,s3)) // Array.of() creates a new array from the values passed to it.
// [10, 20, 30]
// Array.of() creates an array containing the argumnet you give it.