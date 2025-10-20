// 函數是類似黑盒子，把複雜的東西包起來，這樣調用只需要拿function名稱
// input / output/ 的對應關係 mapping

//         參數 parameter
function owo(abc, ...c){ // '...{var_name}' 在這裡是把所有陣列收集起來，這個功能是ES6後才出現
    console.log(`咪咪毛毛 ${abc}`);
    console.log(c);
}

// 缺：會得到undefined
// 多：當沒看到 example陣列: owo(1, 2)，輸出結果只會有1
//   引數argument
owo(1, 2, 3, 4, 5, 6, 7); // 呼叫執行

console.log("-----------------")

// 這個代表如果這個值沒有被帶入就會給予指定的預設值
// 所以該meow參數的預設值為vice
function meow(vv = "vice") {
    console.log(vv);
}

meow();