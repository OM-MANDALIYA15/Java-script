let a  = "om"
let b = "mandaliya"
// console.log(a + b)

console.log(`hello my name is ${a.toUpperCase()} and my surname is ${b}`)

const name = new String("ommandaliya")
// console.log(name[0])
// console.log(name.__proto__);
// console.log(name.length)
// console.log(name.toUpperCase())
console.log(name.charAt(3))
console.log(name.indexOf('a'))

const newname = name.substring(2,6)
console.log(newname)

const anothername = name.slice(-8 , 7)
console.log(anothername)

const c = "    hello    world     "
console.log(c.trim())
console.log(c)

const e = "hello%20world"
console.log(e.replace('%20' , 'om'))

console.log(e.includes('hello'))
console.log(e.split('-'))