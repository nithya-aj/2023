const numbers = [10, 20, 30, 40, 50] 

// const first = numbers[0]
// console.log(first)
// const second = numbers[1]
// console.log(second)

const [first, second, third, ...rest] = numbers
console.log(first)
console.log(second)
console.log(third)
console.log(rest)

const items = [...numbers]
items[0]= 189
console.log(items)
console.log(numbers)