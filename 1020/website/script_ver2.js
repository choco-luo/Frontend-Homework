//另一種寫法
downBtn.addEventListener("click", () => {
    const currentValue = Number(num.value)
    // Early Return
    if (currentValue <= 1) {
        return
    }

    num.value = currentValue - 1
})