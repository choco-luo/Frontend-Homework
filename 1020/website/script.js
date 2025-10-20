// 事件監聽器 Event Listener
const btn = document.querySelector("#btn")

btn.addEventListener("click", () => {
    const div = document.querySelector("#hi")
    const currentText = div.textContent

    if(currentText == "mi mi") {
        div.textContent = "mou mou"
    } else {
        div.textContent = "mi mi"
    }
})

const upBtn = document.querySelector("#upBtn")
const downBtn = document.querySelector("#downBtn")
const num = document.querySelector("#num")

upBtn.addEventListener("click", () => {
    const currentValue = Number(num.value)
    num.value = currentValue + 1
})

downBtn.addEventListener("click", () => {
    const currentValue = Number(num.value)
    if (currentValue > 1) {
        num.value = currentValue - 1
    }
})