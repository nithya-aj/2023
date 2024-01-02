let arr = [1,2,3,4]
let numbers = []

const res = arr.reduce((numbers, val) => [...numbers, val], [])
console.log(res)

const resRight = arr.reduceRight((numbers, val) => [...numbers, val],[])
console.log(resRight)