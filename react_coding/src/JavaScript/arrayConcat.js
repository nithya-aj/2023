const first = [10,20]
const second = [30,40,50,60]

// method 1 
const arr = first.concat(second)
console.log(arr)

// method 2
const arr1 = [...first, ...second]
console.log(arr1)

// we can then mutate this like
const multipleArr = arr.map(v => v*2)
console.log(multipleArr)