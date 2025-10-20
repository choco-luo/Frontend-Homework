const nums = [1, 2, 3, 4, 5]
// [....] --> [FILTER] --> [..]
const result = nums.filter(function (n) {
    return n <= 3
})

console.log(result)