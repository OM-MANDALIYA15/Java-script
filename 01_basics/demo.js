let a = 26
// let a = 43  // let can not be redeclared but it can be reassigned
a=3;
console.log(a)
if(true)
{
    let b = 43;
}
// console.log(b) // let cannot be used outside the block 
// ----------------------------------------------------------
var name = "om"
var name = "hello"  // var n=must be reassigned and it must be redeclared
console.log(name)
if(true)
{
    var c = 10;
}
console.log(c) // var can be outside the block
// ---------------------------------------------------------
const b = 3.14
// const b=4.22 // const cannot be reassigned and can not be redeclared
console.log(b)

if(true)
{
    const e =4.22;
}
// console.log(e) // const can not be used outside the block