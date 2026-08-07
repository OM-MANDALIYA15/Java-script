function myfun()
{
    console.log("hello world")
}
// myfun()

// function add(number1 , number2)
// {
//     console.log(number1 + number2)
// }
// let num = add(1,2)
// console.log(num)

function add(n1,n2)
{
    // let result = n1 + n2
    // return result
    return n1+n2
}
const result1 = add(5,2)
// console.log(result1)

function user(username = "om")
{
    if(!username)
    {
        console.log("please enter a username")
        return
    }
    return `${username} just logged in`
}
// console.log(user(12))

// console.log(user()); // undefined just logged in

function calculate(...num1)
{
    return num1
}
console.log(calculate(200,200,300))

// Function using objects
const user1 = { 
    name : " om",
    id : 20
}
function fun1(anyObject)
{
    console.log(`Username is ${anyObject.name} and price is ${anyObject.id}`)

}
// fun1(user1)
fun1({
    name : " akshar",
    id : 20
})

// Function using of array
const Array = [123,321,233]
function value(getArray)
{
    return getArray[1]
}
console.log(value(Array))
console.log(value([12,32,33]))