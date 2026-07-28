// stack (primitive)  // Heap (non - primitive)

let name = "hello world"
let anothername = name
anothername ="om madaliya"
console.log(name)
console.log(anothername)

let userone = {
    email : "user@gmail.com",
    name : "om mandaliya"
}
let usertwo  = userone
userone.email = "om@gmail.com"
console.log(userone.email)
console.log(usertwo.email)