// 1615
// let input = Number(prompt)

// function selfNum (num) {
//     let result = 0;
//     if (num.length < 2) {
//         result += Number(num);
//     } else {
//     for (let j = 0; j < num.length; j++) {
//         result += Number(num[j]);
//     }
// }
//     result += Number(num);
//     return result;
// }

// let input = prompt();
// let cut = input.split(" ");
// let fResult = ""
// let result = 0;
// for (let i = Number(cut[0]); i <= Number(cut[1]); i++) {
//     fResult += selfNum(i.toString())+",";
// }
// console.log(fResult)

// let cut2 = fResult.split(",");

// for (let i = 0; i <= Number(cut[1]); i++) {
//     result += i;
//     for (let j = 0; j < cut2.length; j++) {
//         if (i == Number(cut2[j])) {
//             // console.log(result)
//             result -= i;
//             break;
//         }
//     }
//     // console.log(result)
// }
// alert(result)

//1620
function sum(input) {
    let result = 0; 
for (let i = 0; i < input.length; i++) {
     result += Number(input[i]);
}
return result;
}

let input = prompt();
let result = 0;
let fResult = 0;

while (true) {

fResult = sum(input);
if (Number(fResult) > 9) {
    input = fResult.toString();
} else {
    break;
}
}

console.log(fResult)



