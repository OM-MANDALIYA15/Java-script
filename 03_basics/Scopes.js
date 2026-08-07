function one()
{
    const uname = "om"

    function two()
    {
        const surname = "mandaliya"
        console.log(uname)
    }
    console.log(surname)
   two()
}
one()

if(true)
{
    const uname = "om"
    if(uname === "om")
    {
        const website ="youtube"
        // console.log(uname + website)
    }
    // console.log(website) can"t access because website is declare by const and that is functonal scope
}

// console.log(uname) can"t access because website is declare by const and that is functonal scope


// ++++++++++++++++++++++++++ Question

console.log(add(5)) // JavaScript knows about the function before executing the code.
function add(num)
{
    return num +1
}

// addtwo(4) Because addtwo is declared with const, and you cannot access it before its initialization.
const addtwo = function(num)
{
    return num + 2
}
