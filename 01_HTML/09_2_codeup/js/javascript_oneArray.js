// 1402
// let num = Number(prompt());
// let input = prompt();
// let cut = input.split(" ");
// let result = "";

// for (let i = cut.length-1; i >= 0; i--) {
//     if (i == 0) {
//         result += cut[i];
//     } else {
//     result += cut[i]+" ";
//     }
// }
// console.log(result)

// 1403
// let num = Number(prompt());
// let input = prompt();
// let cut = input.split(" ");
// let result = "";

// for (let i = 0; i < num; i++) {
//     for (let j = 0; j < cut.length; j++) {
//         result += cut[j]+"\n";
//     }
// }

// console.log(result);


// 1405
// let num = Number(prompt());
// let input = prompt();
// let cut = input.split(" ");
// let result = "";

// for (let i = 0; i < num; i++) {
//     for (let j = 0; j < cut.length; j++) {
//             if (j+i >= cut.length) {
//                 result += cut[(j+i)-cut.length]+" ";
//             } else {
//             result += cut[j+i]+" ";
//             }
//     }
//     result += "\n"
// }

// console.log(result);

// 1407
// let input = prompt();
// input = input.replaceAll(" ","");
// console.log(input);

// 1409
// let input = prompt();
// let num = Number(prompt());
// let cut = input.split(" ");
// let result = cut[num-1];
// console.log(result);

// 1410
// let input = prompt();
// let count1 = 0;
// let count2 = 0;

// for (let i = 0; i < input.length; i++) {
//     if (input[i] == "(") {
//         count1++;
//     }
//     if (input[i] == ")") {
//         count2++;
//     }
// }
// console.log(count1, count2);

1411
// let num = Number(prompt());
// let input = []
// for (let i = 0; i < num-1; i++) {
//     input[i] = Number(prompt());
// }
// let count = 0;
// let result = "";


// for (let i = 1; i <= num; i++) {
//     for (let j = 0; j < input.length; j++) {
//         if (input[j] == i) {
//             // console.log(j,input[j],i)
//             count = 1;
//             break;
//         }
//     }
//     if (count == 1) {
//         count = 0;
//         continue;
//     }
//     result = i;
// }
// console.log(result);


// 1412
// let input = prompt();
// let alp = new Array(26);
// alp.fill(0);
// for (let i = 0; i < input.length; i++) {
//     if (input[i].charCodeAt() > 96 && input[i].charCodeAt() < 123) {
//         alp[Math.abs(97-input[i].charCodeAt())]+= 1;
//     }
// }
// let result = "";

// for (let i = 0; i < alp.length; i++) {
//     result += String.fromCharCode(97+i)+":"+alp[i]+"\n";
// }
// console.log(result);

// 1416
// let input = Number(prompt());
// let result = [];

// for (let i = 0; input > 1; i++) {
//     result[i] = input%2;
//     input = Math.floor(input/2);
//     result[i+1] = input;
// }
// result = result.reverse();
// console.log(result);

// 1420
// let num = Number(prompt());
// let input = "";
// let name = [];
// let score = [];
// for (let i = 0; i < num; i++) {
// input += prompt();
// input = input.split(" ");
// name[i] = input[0];
// score[i] = input[1];
// score = score.map(Number);
// input = "";
// }
// let max = 0;
// let maxSecond = 0;
// let maxThird = 0;
// for (let i = 0; i < score.length; i++) {
//     if (score[i] > max) {
//         maxThird = maxSecond;
//         maxSecond = max;
//         max = score[i];
//     } else if (score[i] > maxSecond) {
//         maxThird = maxSecond;
//         maxSecond = score[i];
//     } else if (score[i] > maxThird) {
//         maxThird = score[i];
//     }
// }
// let result = "";
// result = score.indexOf(maxThird);
// console.log(name[result]);
// console.log(score);


// 1425
// let num = prompt().split(" ").map(Number);
// let input = prompt().split(" ");
// let result = "";
// for (let i = 0; i < num[0]; i++) {
//     if ((i+1)%(num[1]) == 0) {
//         console.log(i)
//         result += input[i]+"\n";
//     } else {
//         result += input[i]+" ";
//     }

// }
// console.log(result);

// 1426
// let qNum = Number(prompt());
// let question = prompt().split(" ");
// let aNum = Number(prompt());
// let answer = prompt().split(" ");
// let result = new Array(answer.length);
// result.fill(0);
// for (let i = 0; i < answer.length; i++) {
//     for(let j = 0; j < question.length; j++) {
//         if (answer[i] == question[j]) {
//             result[i] = 1;
//         }
//     }
// }
// console.log(result);

// 1440
// let num = Number(prompt());
// let input = prompt().split(" ").map(Number);
// let result = "";
// for (let i = 0; i < input.length; i++) {
//     for (let j = 0; j < input.length; j++) {
//         if (i == j) {
//             continue;
//         }
//         if (input[i] < input[j]) {
//             result += "<";
//         }
//         if (input[i] > input[j]) {
//             result += ">";
//         }
//         if (input[i] == input[j]) {
//             result += "=";
//         }
//     }
//     result += "\n";
// }
// console.log(result)


