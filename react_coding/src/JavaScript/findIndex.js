const names = ['tia', 'sid', 'jia', 'Bob', 'tia']
console.log(names)

console.log(names.indexOf('tia'))
console.log(names.indexOf('nithya'))
console.log(names.indexOf('tia', 1))

console.log(names.lastIndexOf('tia'))
console.log(names.lastIndexOf('sid'))

console.log(names.findIndex((name) => name === "bob"))
console.log(names.findIndex((name) => name === "Bob"))