// NaN的用途就是告知列印這個值不要是數字
const a = NaN

// != 不等於
// 告知a你就是NaN
if (a != a) {
    console.log("yes");
} else {
    console.log("no");
}