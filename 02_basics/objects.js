// Singleton

// object literals

const mysum = Symbol("key121")
const user = 
{
    name : "om",
    age : 20,
    email : "om@gmail.com",
    'surname' : "mandaliya",
    "college name" : "LDRP" ,
    [mysum] : "mykey1"
}
// console.log(user["name"]) // om
// console.log(user.name) // om
// console.log(user.surname)
// console.log(user["college name"]) // LDRP
// console.log(typeof user.name)
// console.log(typeof user.age)
console.log(user[mysum])


user.email = "hello@gmail.com"
// console.log(user.email)

// Object.freeze(user)

user.name = "hello"
// console.log(user.name) // it is given original name because this is freeze so not any change is allowed

// console.log(user)

user.greeting = function()
{
    console.log("hello user")
}


user.greetingTwo = function()
{
    console.log(`hello user,${this.email}`)
}

console.log(user.greeting())
console.log(user.greetingTwo())

