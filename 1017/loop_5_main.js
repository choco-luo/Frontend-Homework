for (let i = 1; i <= 5; i += 1) {
    console.log("*".repeat(i));
}

console.log(("----------"))


// 對稱三角形
// google AI 解答版
const height = 5;

for (let i = 1; i <= height; i++) {
    let spaces = " ".repeat(height - i);
    let stars = "*".repeat(2 * i - 1);
    console.log(spaces + stars);
}

console.log(("----------"))

// 講師解答
for (let i = 1; i <= 5; i += 1) {
    const stars = "*".repeat(i * 2 - 1);
    const space = " ".repeat(5 - i);
    const txt = `${space}${stars}`
    console.log(txt);
}