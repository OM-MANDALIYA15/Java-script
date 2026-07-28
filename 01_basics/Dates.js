// Dates

let date = new Date()
// console.log(date.toString())
// console.log(date.toDateString())
// console.log(date.toLocaleString())
// console.log(typeof date)

let mydate = new Date(2023,0,23)
// console.log(mydate.toString())

let mydate1 = new Date(2023,0,23,5,6)
// console.log(mydate1.toLocaleString())

let mydate2 = new Date("2024-03-15")
console.log(mydate2.toLocaleString())

let stamp = Date.now()
console.log(stamp.toLocaleString())
console.log(mydate2.getTime())

let newdate = new Date()
console.log(newdate)
console.log(newdate.getFullYear())
console.log(newdate.getMonth())
console.log(newdate.getDate())
console.log(newdate.getHours())

newdate.toLocaleDateString('default',{
    weekday: "long"
        
})