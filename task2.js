string = "Привет, Мир!"

let collapsedString = ""
for (let i = 0; i < string.length; i++) {
    collapsedString += string.at(-i - 1)
}
console.log(collapsedString);