const numbers = [1, 1, 1, 1, 1, 1]

// for (let val = 0; val <= numbers.length; val++) {
//     let sum = 0
//     sum = val + sum
//     console.log(sum)
// }


let sum = 0
for (const value of numbers) {
    sum += value
}
console.log(sum)

// using reduce method
numbers.reduce((sum, value) => {
    sum += value
    return sum
}, 0)
console.log(sum)

// we can also use like
numbers.reduce((sum, value) => sum + value, 0)
console.log(sum)

// let's see how to use the other parameters like index and array 
const avg = numbers.reduce((avg, value, _, arr) => avg + value / arr.length, 0)
console.log(avg)

const names = ['Sid', "Tia", "Imeya", "No2", "No3"]
const str = names.reduce((str, name, index) => str + (index > 0 ? "," : '') + name, "")
console.log(str)

// but the above thing can easily achieved using join method, it goes like this
const namesArr = names.join(",")
console.log(namesArr)