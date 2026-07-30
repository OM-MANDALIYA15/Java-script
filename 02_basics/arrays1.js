const name = ["om","virat","kohli"]
const name1 = ["rohit" , "sharma"]

// name.push(name1)
// console.log(name)
// console.log(name[3][0])  // rohit

const name2 = name.concat(name1)
console.log(name2)

const name3 = [...name,...name1]
console.log(name3)

