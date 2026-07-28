// primitive data types : 

// String , Number , Boolean , null , undefined , symbol , BigInt

const score = 100 //Number  
const value = 200.33 // Number

const loggin = false // Boolean

const id = Symbol('123')
const id1 = Symbol('123')
console.log(id === id1)

const bigNumber = 23432123n

// Reference ( Non Primitive data types)

// Arrays , objects , function

const heros = ["hello" , "world"]; // Array
let myobj = // Object
{
    name : " om",
    age : 20
}

const myfunction = function(){ // Function 
    console.log("hello world")
}
myfunction();

console.log(typeof myfunction)
console.log(typeof bigNumber)
console.log(typeof myobj)
console.log(typeof id)