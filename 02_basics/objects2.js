// object singleton


const user = new Object()

user.id = 20
user.name = "om"
// console.log(user)

const user1 = {
    name : "hello world",
    fullname : {
        userfullname :{
            fname : "om" ,
            lname : "mandaliya"
        }
    }
}

console.log(user1.fullname.userfullname.fname)
// console.log(user1)

const obj1 = {1 :"a", 2:"b"}
const obj2 = {3:"c" , 4 : "e"}
const obj3  = Object.assign({},obj1,obj2)

const obj4 = {obj1,obj2}
const obj5 = {...obj1,...obj2}
// console.log(obj3)
// console.log(obj4)
// console.log(obj5)


const users= [
    {
        id : 1,
        name : "hello"
    },
    {
        id : 1,
        name : "hello"
    },
    {
        id : 1,
        name : "hello"
    },
]

users[1].name
// console.log(user)
// console.log(users)

console.log(Object.keys(user))
console.log(Object.values(user))
console.log(Object.entries(user))
console.log(user.hasOwnProperty('name')); // TRUE
