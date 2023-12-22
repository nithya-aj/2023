const numbers = [10, -20, 30, -40, 50, -60]

console.log(numbers.includes(10))

console.log(numbers.some((val) => val < -90 ))
console.log(numbers.some((val) => val > 0 ))

console.log(numbers.every((val) => val > 0 ))
console.log(numbers.every((val) => val > -70 ))
