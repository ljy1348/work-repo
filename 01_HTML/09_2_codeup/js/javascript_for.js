// 1251
// let result = "";
// for (let i = 1; i <= 100; i++) {
//     result += i+" ";
// }
// document.querySelector("h2").innerHTML = result;

// 1252
// let input = Number(prompt());
// let result = "";
// for (let i = 1; i <= input; i++) {
//     result += i+" ";
// }
// document.querySelector("h2").innerHTML = result;

// 1253
// let input = prompt();
// let cut = input.split(" ");
// let result = "";
// for (let i = Math.min(cut[0], cut[1]); i <= Math.max(cut[0], cut[1]); i++) {
//     result += i+" ";
// }
// document.querySelector("h2").innerHTML = result;

// 1254
// let input = prompt();
// let cut = input.split(" ");
// let result = "";
// for ( let i = cut[0].charCodeAt(); i <= cut[1].charCodeAt(); i++) {
//     result += String.fromCharCode(i)+" ";
//     console.log(i)
// }
// document.querySelector("h2").innerHTML = result;

// 1255
// let input = prompt();
// let cut = input.split(" ");
// let result = "";

// for (let i = Number(cut[0]); i <= Number(cut[1]); i += 0.01) {
//     result += i.toFixed(2)+" ";
// }
// document.querySelector("h2").innerHTML = result;

// 1256
// let input = Number(prompt());
// let result = "";
// for (let i = 1; i <= input; i++) {
//     result +="*";
// }
// document.querySelector("h2").innerHTML = result;

// 1257
// let input = prompt();
// let cut = input.split(" ");
// let result = "";
// let max = Math.max(cut[0], cut[1]);
// let min = Math.min(cut[0], cut[1])

// for (let i = min; i <= max; i++) {
//     if (i%2 == 1) {
//         result += i;
//     }
// }
// document.querySelector("h2").innerHTML = result;

// 1258
// let input = Number(prompt());
// let result = 0;
// for (let i = 1; i <= input; i++) {
//     result += i;
// }
// document.querySelector("h2").innerHTML = result;

// 1259
// let input = Number(prompt());
// let result = 0;
// for (let i = 1; i <= input; i++) {
//     if (i%2 == 0) {
//     result += i;
//     }
// }
// document.querySelector("h2").innerHTML = result;

// 1260
// let input = Number(prompt());
// let result = 0;
// for (let i = 1; i <= input; i++) {
//     if (i%3 == 0) {
//     result += i;
//     }
// }
// document.querySelector("h2").innerHTML = result;

// 1261
// let input = prompt();
// let cut = input.split(" ");
// let result = "";

// for (let i = 0; i < cut.length; i++) {
//     if (cut[i]%5 == 0) {
//         result = cut[i];
//         break;
//     } else {
//         result = "0";
//     }
// }
// document.querySelector("h2").innerHTML = result;

// 1265
// let input = Number(prompt());
// let result = "";
// if (input < 10 && input > 0) {
// for (let i = 1; i <= 9; i++) {
//     result += input+"*"+i+" = "+(input*i)+"<br>";
// }
// }
// document.querySelector("h2").innerHTML = result;

// 1266
// let input = Number(prompt());
// let input2 = prompt();
// let cut = input2.split(" ");
// let result = 0;

// for (let i = 0; i < input; i++) {
//     result += Number(cut[i]);
// }
// document.querySelector("h2").innerHTML = result;

// 1267
// let input = Number(prompt());
// let input2 = prompt();
// let cut = input2.split(" ");
// let result = 0;

// for (let i = 0; i < input; i++) {
//     if (cut[i]%5 == 0) {
//     result += Number(cut[i]);
//     }
// }
// document.querySelector("h2").innerHTML = result;

// 1268
// let input = Number(prompt());
// let input2 = prompt();
// let cut = input2.split(" ");
// let result = 0;

// for (let i = 0; i < input; i++) {
//     if (cut[i]%2 == 1) {
//     result++;
//     }
// }
// document.querySelector("h2").innerHTML = result;

// 1269
// let input = prompt();
// let cut = input.split(" ");
// let result = cut[0];
// for (let i = 0; i < cut[3]-1; i++) {
//     result = Number(result*cut[1])+Number(cut[2]);
// }
// document.querySelector("h2").innerHTML = result

// 1270
// let input = Number(prompt());
// let result = 0;
// for (let i = 1; i <= input; i++) {
//     if ((i.toString())[i.toString().length-1].includes("1")) {
//         result++;
//     }
// }
// document.querySelector("h2").innerHTML = result;

// 1271
// let input = Number(prompt());
// let input2 = prompt();
// let cut = input2.split(" ");
// let result = 0;

// for (let i = 0; i < input; i++) {
//     if (result < cut[i]) {
//         result = cut[i];
//     }
// }
// document.querySelector("h2").innerHTML = result;

// 1272
// let input = prompt();
// let cut = input.split(" ");
// let max = Math.max(Number(cut[0]),Number(cut[1]))
// let result = 0;

// for (let i = 0; i < cut.length; i++) {
// if (cut[i]%2 == 0) {
//     result += (cut[i]/2)*10;
// } else {
//     result += Number((cut[i]/2).toFixed());
// }
// }

// document.querySelector("h2").innerHTML = result;

// 1273
// let input = Number(prompt());
// let result = ""
// for (let i = 0; i <= input; i++) {
//     if (input%i == 0) {
//         result += i+" ";
//     }
// }
// document.querySelector("h2").innerHTML = result

// 1274
// let input = Number(prompt());
// let result = ""
// let count = 0;
// for (let i = 0; i <= input; i++) {
//     if (input%i == 0) {
//         count++;
//     }
// }
// count == 2 ? result="prime":result="not prime"
// document.querySelector("h2").innerHTML = result;

// 1275
// let input = prompt();
// let cut = input.split(" ");
// let result = Math.pow(cut[0],cut[1]);
// document.querySelector("h2").innerHTML = result;

// 1276
// let input = Number(prompt());
// let result = 1;
// for (let i = 1; i <= input; i++) {
//     result *= i;
// }
// document.querySelector("h2").innerHTML = result

// 1277
// let input = Number(prompt());
// let input2 = prompt();
// let cut = input2.split(" ");
// let result = cut[0]+" "+cut[Math.floor(input/2)]+" "+cut[cut.length-1]
// document.querySelector("h2").innerHTML = result;

// 1278
// let input = Number(prompt());
// let result = 1;
// while (input > 9) {
//     if (input < 10) {
//         break;
//     }
//     input = input/10;
//     result++;
// }
// document.querySelector("h2").innerHTML += result;

// 1279
// let input = prompt();
// let cut = input.split(" ");
// let result = 0;
// let max = Math.max(cut[0],cut[1]);
// let min = Math.min(cut[0],cut[1]);
// for (let i = min; i <= max; i++) {
//     i%2 == 1 ? result+=i:result-=i; //홀수 이면 더하고, 홀수 아니라면(짝수라면) 뺀다.
// }
// document.querySelector("h2").innerHTML += result;

//1280
// let input = prompt();
// let cut = input.split(" ");
// let result = 0;
// let result2 = "";
// let max = Math.max(cut[0],cut[1]);
// let min = Math.min(cut[0],cut[1]);
// for (let i = min; i <= max; i++) {
//     if (i%2 == 1) {
//     result+=i;
//     result2 += "+"+i;
//     } else {
//     result-=i; 
//     result2 += "-"+i;
//     }
// }
// document.querySelector("h2").innerHTML += result2+"="+result;


//1281
// let input = prompt();
// let cut = input.split(" ");
// let result = 0;
// let result2 = "";
// let max = Math.max(cut[0],cut[1]);
// let min = Math.min(cut[0],cut[1]);
// for (let i = min; i <= max; i++) {
//     if (i%2 == 1) {
//     result+=i;
//     if(i == min) {
//         result2 += i;
//         continue;
//     }
//     result2 += "+"+i;
//     } else {
//     result-=i; 
//     result2 += "-"+i;
//     }
// }
// document.querySelector("h2").innerHTML += result2+"="+result;

// 1282
// let input = Number(prompt());
// let result = "";
// for (let i = 1; Math.pow(i,2) <= input; i++) {
//     if (Math.pow(i, 2) > input) {
//         result = (input-Math.pow(i-1,2))+" "+(i-1);
//     } else {
//         result = (input-Math.pow(i,2))+" "+(i);
//     }
// }
// document.querySelector("h2").innerHTML = result;

// 1283
// let input = Number(prompt());
// let day = Number(prompt());
// let per = prompt();
// let cut = per.split(" ");
// let cal = input;
// let result = "";
// for (let i = 0; i < day; i++) {
//     cal = cal*((Number(cut[i])+100)/100);
// }
// if (cal > input) {
//     result += (cal-input).toFixed()+"<br>"+"good";
// } else if (cal == input) {
//     result += (cal-input).toFixed()+"<br>"+"same";
// } else {
//     result += (cal-input).toFixed()+"<br>"+"bad";
// }
// document.querySelector("h2").innerHTML = result;

// 1284
// let input = Number(prompt());
// let result = "";

// function check (input) {
//     let sqrt = Math.sqrt(input);
//     let fResult;
//     sqrt = Math.floor(sqrt);
//     if (input < 4) {
//         (input == 1) ? fResult = false:fResult = true;
//     } else {
//     for (let i = 2; i <= sqrt; i++) {
//         let cal = input%i;
//         if (cal == 0) {
//             fResult = false;
//             break;
//         }
//         fResult = true;
//     }
// }
// return fResult;
// }

// if (input < 4) {
//     result = "wrong number";
// } else {

// for (let i = 1; i <= input/2; i++) {
//     if (Number.isInteger(input/i)) {
//     if (check(i) == true && check(input/i) == true) {
//         result = i+","+(input/i);
//         break;
//         }
// } else {
//     result = "wrong number";
// }
// }
// }
// console.log(result);
// document.querySelector("h2").innerHTML = result;

// 1286
// let input = [];
// for (let i = 0; i < 5; i++) {
//  input[i] = Number(prompt());
// }
// let max = -10000000;
// let min = 10000001;

// for (let i = 0; i < input.length; i++) {
//     max = Math.max(input[i], max);
//     min = Math.min(input[i], min);
// }

// let result = max+"<br>"+min;
// document.querySelector("h2").innerHTML = result;

// 1287
// let input = Number(prompt());
// let result = "";
// let cal = "";
// for (let i = 1; i <= input; i++) {
//     cal += "*";
// }
// for (let i = 1; i <= 9; i++) {
//     result += cal;
// }
// document.querySelector("h2").innerHTML = result;

// 1294
// let input = prompt();
// let result = "";
// for (let i = 0; i < input.length; i++) {
//     if (input[i].charCodeAt() == 32){
//         result += " ";
//         continue;
//     }
//     if (input[i].charCodeAt() > 119 && input[i].charCodeAt() < 123) {
//         result += String.fromCharCode(input[i].charCodeAt()-26+3);
//     }
//     if (input[i].charCodeAt() < 120) {
//         result += String.fromCharCode(input[i].charCodeAt()+3);
//         continue;
//     }
// }
// document.querySelector("h2").innerHTML = result;

// 1295
// let input = prompt();
// let result = "";
// for (let i = 0; i < input.length; i++) {
//     if (input[i].charCodeAt() > 96 && input[i].charCodeAt() < 123) {
//         result+=(String.fromCharCode(input[i].charCodeAt())).toUpperCase();
//         continue;
//     }
//     if (input[i].charCodeAt() > 64 && input[i].charCodeAt() < 91) {
//         result+=(String.fromCharCode(input[i].charCodeAt())).toLowerCase();
//         continue;
//     }
//     result += String.fromCharCode(input[i].charCodeAt())
// }
// document.querySelector("h2").innerHTML = result;


// 1675
// let input = prompt();
// let result = "";
// for (let i = 0; i < input.length; i++) {
//     if (input[i].charCodeAt() == 32){
//         result += " ";
//         continue;
//     }
//     if (input[i].charCodeAt() > 96 && input[i].charCodeAt() < 100) {
//         result += String.fromCharCode(input[i].charCodeAt()+26-3);
//     }
//     if (input[i].charCodeAt() > 99) {
//         result += String.fromCharCode(input[i].charCodeAt()-3);
//         continue;
//     }
// }
// console.log(result);







