let days = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"]

let start = "воскресенье"
let startIndex = 0
let nums = 0

startIndex = days.indexOf(start) - 1

for (let i = 1; i <= 31; i++) {
    nums = (i + startIndex) % 7;
    console.log(i, "января - это", days[nums])
}