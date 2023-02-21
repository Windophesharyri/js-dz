roadMines = [false, false, false, true, false, false, false, false, false, false]

let move = ""
let position = 0
let hitMark = 0

for (let i = 0; i < roadMines.length; i++) {
    position = i + 1
    move = roadMines[i]

    if (hitMark == 2) {
        console.log("Танк уничтожен");
        break;
    }

    console.log("Танк переместился на", position, "позицию");
    if (move == true) {
        hitMark += 1
    }
    else {
        continue;
    }

    if (hitMark == 1) {
        console.log("Танк повреждён");
        continue;
    }
}