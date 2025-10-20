//BMI 計算
function calcBMI(height, weight) {
    const h = height / 100;
    // const result = weight / (h * h);

    return weight / (h * h);
}

const bmi = calcBMI(170, 64);
console.log(bmi);