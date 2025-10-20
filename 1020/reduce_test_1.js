const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// 偶數
const result = nums.filter(function (n) {
    return n % 2 == 0
})
// 平方
const square = result.map(function (n){
    return n * n
})
// 總和
const total = square.reduce(function (acc, cv) {
    return acc + cv
})

console.log(total)

// 另一種寫法示範
// nums已經定義所以不用寫，在第一行。
const total2 = nums
    .filter(function (n) {
        return n % 2 == 0
    })
    .map(function (n) {
        return n * n
    })
    .reduce(function(acc, cv) {
        return acc + cv
    })

console.log(total2)