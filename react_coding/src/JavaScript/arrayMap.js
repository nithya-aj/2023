const nums = [10, 20, 30, 40, 50]

const multipleArr = nums.map((v) => v * 10)
console.log(multipleArr)

const multipleObjArr = nums.map((v) => ({ value: v * 10 }))
console.log(multipleObjArr)

// filter with map
const numbers = [10, -20, 30, 43, -53, -64]
const positiveNumbersTimes10 = numbers.filter((v) => v > 0).map((v) => v * 10)
console.log(positiveNumbersTimes10)

// mapping over array of objects
const people = [
    { first: 'Nithya', last: 'AJ', address: { city: 'Thrissur' } },
    { first: 'Niya', last: 'AJ', address: { city: 'Thrissur' } },
    { first: 'Anu', last: 'K', address: { city: 'Trivandrum' } }
]

const data = people.map((v) => ({ ...v, fullName: `${v.first} ${v.last}` }))

console.log(data)

data[0].first = 'Divya'
console.log(data[0])

data[0].address.city = 'Kollam'
console.log(data[0])

console.log(people[0])