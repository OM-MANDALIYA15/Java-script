// Array

const array = [0,1,2,3,45,56]
// console.log(array[0])
// console.log(array[1])

for(i=0;i<array.length;i++)
{
 //  console.log(array[i])
}
// ********Array methos*********
// array.push(30)  // add element in the array
// console.log(array)

// array.pop()  // Remove element in the array

// array.unshift(20)  // Add 20 in the first index of array
// console.log(array)
// array.shift() // Remove First element From of index
// console.log(array);


// console.log(array.includes(10)) // Return true if element present in array
// console.log(array.indexOf(0)) // return index of 0.


 const newArr = array.join() // .join() is convert array in to the string and return in new variable
//  console.log(newArr)
// console.log(typeof newArr) // String

// slice , splice

// console.log("A" , array)

const myn1 = array.slice(1,4) // slice funcrtion is does affect the original array it also copy them value
// console.log(myn1)
// console.log("B" , array)

const myn2 = array.splice(1,2) // splice function can be chanage the original value of array
console.log(myn2)
console.log("B" , array)


