// test_1
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const result = nums.filter(function (n) {
    return n % 2 == 0
})

console.log(result)

// test_2
const nums2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const result2 = nums2.filter(function (n) {
    return n - 1
})

console.log(result2)

// test_3
const nums3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const result3 = nums3.filter(function (n) {
    true
})

console.log(result3)