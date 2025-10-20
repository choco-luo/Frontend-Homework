// 雙層 for 迴圈寫法
for (let i = 1; i <= 9; i = i + 1) {
    for (let j = 1; j <= 9; j = j + 1) {
        const result = i + " x " + j + " = " + i * j;
        console.log(result);
    }
}

console.log("---------------------")

// 更乾淨的寫法
// result也可以直接把裡面的值直接放進console.log
for (let i = 1; i <= 9; i = i + 1) {
    for (let j = 1; j <= 9; j = j + 1) {
        const result = `${i} x ${j} = ${i * j}`;
        console.log(result);
    }
}