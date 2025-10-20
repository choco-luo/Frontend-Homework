const nums = [1, 2, 3, 4, 5]
const result = []
for (let i = 0; i < nums.length; i += 1) {
    const n = nums[i]
    result.push(n * 2)
}

console.log(result)