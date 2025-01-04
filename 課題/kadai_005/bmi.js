// Step 1: 体重と身長を変数に代入
let weight = 68; // 体重 (kg)
let height = 1.7; // 身長 (m)

// Step 2: BMIを計算
let bmi = weight / (height * height);

// Step 3: 計算結果を出力
console.log("体重:", weight, "kg");
console.log("身長:", height, "m");
console.log("BMI:", bmi.toFixed(2)); // 小数点以下2桁で表示
