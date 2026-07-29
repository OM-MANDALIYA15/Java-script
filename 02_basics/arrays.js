// Array

const array = [0,1,2,3,45,56]
// console.log(array[0])
// console.log(array[1])

for(i=0;i<array.length;i++)
{
 //  console.log(array[i])
}
// ********Array methos*********
// array.push(30)
// console.log(array)

// array.pop()

// array.unshift(20)
// array.shift()

// console.log(array.includes(10))
// console.log(array.indexOf(0));


// const newArr = array.join()
// console.log(array)
// console.log(typeof newArr) // String

// slice , splice

console.log("A" , array)

const myn1 = array.slice(1,4)
// console.log(myn1)
//  console.log("B" , array)

const myn2 = array.splice(1,2)
console.log(myn2)
console.log("B" , array)


