let n = 7
let m = -500
let count = 42
let allNums = 0
let numArray = []

if (n > m) {
    allNums = n - m
}
else {
    allNums = m - n
}

for (let i = 1; i <= count; i++) {
    if (n > m) {
        let random = Math.ceil(Math.random() * allNums) + m
        numArray.push(random)   
    }
    else {
        let random = Math.ceil(Math.random() * allNums) + n
        numArray.push(random) 
    }
}

console.log(numArray);