// 1131
// let input = prompt();
// console.log(input);

// 1132
// let input = prompt();
// console.log(input);

// 1133
// let input = prompt();
// console.log(input);

// 1295
// let input = prompt();
// let result = "";

// for (let i = 0; i < input.length; i++) {
//     if (input[i].charCodeAt() > 64 && input[i].charCodeAt() < 91) {
//         result += input[i].toLowerCase()
//     } else
//     if (input[i].charCodeAt() > 96 && input[i].charCodeAt() < 123) {
//         result += input[i].toUpperCase()
//     } else {
//         result += input[i]
//     }
// }
// console.log(result)

// 1406
// let input = prompt();
// if (input.includes("love")) {
//     console.log("I love you");
// }

// 1407
// let input = prompt();
// console.log(input.replaceAll(" ",""));

// 1408
// let input = prompt();
// let result1 = "";
// let result2 = "";

// for (let i = 0; i < input.length; i++) {
//     result1 += String.fromCharCode((input[i].charCodeAt()) + 2);
//     result2 += String.fromCharCode((((input[i].charCodeAt())*7)%80) + 48);
// }
// console.log(result1)
// console.log(result2)

// 1414
// let input = prompt();
// let count1 = 0;
// let count2 = 0;
// for (let i = 0; i < input.length; i++) {
//     if (input[i] == "c" || input[i] == "C") {
//         count1++;
//     }
//     if ((input[i]+input[i+1])=="cc" || (input[i]+input[i+1])=="cC" || (input[i]+input[i+1])=="CC" || (input[i]+input[i+1])=="Cc") {
//         count2++;
//     }
// }
// console.log(count1+"\n"+count2);

// 1418
// let input = prompt();
// let result = "";
// for (let i = 0; i < input.length; i++) {
//     if (input[i] == "t") {
//         result += (i+1)+" ";
//     }
// }
// console.log(result);

// 1419
// let input = prompt();
// let result = 0;
// for (i = 0; i < input.length; i++) {
//     if (input.indexOf("love", i) != -1) {
//         result++;
//         i = input.indexOf("love", i)+1;
//     }
// }
// console.log(result);

// 1733
// let input = prompt();
// if (input === "IOI") {
//     console.log("IOI is the International Olympiad in Informatics.");
// } else {
//     console.log("I don't care.");
// }

// 1734
// let input = prompt();
// console.log("welcome! "+input);

// 1754
// let input = prompt().split(" ");
// let result = "";
// if (input[0] > input[1]) {
//     result = input[1]+" "+input[0];
// } else {
//     result = input[0]+" "+input[1];
// }
// console.log(result);

// 1990
// let input = prompt();
// if (input%3 == 0) {
//     console.log(1);
// } else {
//     console.log(0);
// }

// 2721
// let input1 = prompt();
// let input2 = prompt();
// let input3 = prompt();
// let result = ""
// if (input1[input1.length-1] == input2[0] && input2[input2.length-1] == input3[0] 
//     && input1[0] == input3[input3.length-1]) {
//     result = "good";
// } else {
//     result = "bad";
// }

// console.log(result);

// 6130
// let input = prompt();
// let x = input.indexOf("x");
// // let equal = input.indexOf("=");
// let op = input.indexOf("x")+2;
// let a = input.substring(0,x);
// // let b = input.substring(op,equal);
// let b = input.substring(x+1,input.length);
// b = -Number(b);

// let result = (b/a).toFixed(2);
// console.log(result);

// 6131
// let input = prompt();
// let x = input.indexOf("x");
// let equal = input.indexOf("=");
// let op = input.indexOf("x")+2;
// let a = Number(input.substring(0,x));
// let b = -Number(input.substring(x+1,equal));
// let c = Number(input.substring(equal+1,input.length));
// let result = ((b+c)/a).toFixed(2);
// console.log(result);




