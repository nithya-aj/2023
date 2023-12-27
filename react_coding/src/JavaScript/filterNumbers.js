const numbers = [10, -20, 30, -40, 45, 59, 100]

const allPositives = numbers.filter((v) => v > 0 && v < 50)
console.log(allPositives)
const allNegative = numbers.filter((v) => v < 0)
console.log(allNegative)


const people = [{ name: "John" }, { name: "Ann" }, { name: "Jith" }]

const newObj = people.filter(({name}) => name.startsWith("J"))
console.log(newObj)

// filter array parameter
const numArray = [9, 10, 11, 13, 14, 15, 16]

const hasNext = numArray.filter((v, _, a) => a.includes(v+1))
console.log(hasNext)