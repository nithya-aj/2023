const numbers = [
    [10, 20, 30],
    [40, 50, 60],
    [70, 80, 90]
]
const flatNumbers = numbers.flat()
console.log(flatNumbers)

// if there is deep array 
const deepArray = [[[[10, 20, 30]]], [[[40, 50, 60]]], [[[70, 80, 90]]]]
const firstFlat = deepArray.flat()
console.log(firstFlat)
const secondFlat = deepArray.flat(2)
console.log(secondFlat)
const flatArrays = deepArray.flat(Infinity)
console.log(flatArrays)


// flatMap() = it is similar to using flat followimg map but more efficient than calling to methods separately
const arr = [1, 2, 3, 4]

// Using map() alone:
const mappedArray = arr.map(x => [x, x * 2]);
console.log(mappedArray)

// Using flatMap():
const flatMappedArray = arr.flatMap(x => [x, x * 2])
console.log(flatMappedArray)
