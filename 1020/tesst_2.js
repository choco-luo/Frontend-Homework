// 箭頭函數 (不正確, 要修改)
const total2 = nums
    .filter(n => n % 2 == 0)
    .map(n => n * n)
    .reduce((acc, cv) => acc + cv)

console.log(total2)