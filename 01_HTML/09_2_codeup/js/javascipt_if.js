// 1151
// let input = Number(prompt());

// if (input < 10) {
//     console.log("small");
// }

// 1152
// let input = Number(prompt());

// if (input < 10) {
//     console.log("small");
// } else {
//     console.log("big");
// }

//1153
// let input = prompt();
// let cut = input.split(" ");

// if (cut[0] > cut[1]) {
//     console.log(">");
// } else if (cut[0] < cut[1]) {
//     console.log("<");
// } else {
//     console.log("=");
// }

// 1154
// let input = prompt();
// let cut = input.split(" ");
// let result = Math.abs(Number(cut[0]) - Number(cut[1]));
// console.log(result);

// 1155
// let input = Number(prompt());
// if (input%7 == 0) {
//     console.log("multiple");
// } else {
//     console.log("not multiple");

// }

// 1156
// let input = Number(prompt());
// if (input%2 == 0) {
//     console.log("even");
// } else {
//     console.log("odd");
// }

// 1157
// let input = Number(prompt());
// if (input>=50 && input<=60) {
//     console.log("win");
// } else {
//     console.log("lose")
// }

// 1158
// let input = Number(prompt());
// if ((input>=60 && input<=70) || (input>=30 && input<=40) ) {
//     console.log("win");
// } else {
//     console.log("lose")
// }

// 1159
// let input = Number(prompt());
// if ((input>=50 && input<=70) || (input%6 == 0) ) {
//     console.log("win");
// } else {
//     console.log("lose")
// }

// 1160
// let input = Number(prompt());
// switch (input) {
//     case 1:
//         case 3:
//             case 5:
//                 case 7:
//                     console.log("oh my god");
//                     break;
//     default :
//     console.log("enjoy");
// }

// 1161
// let input = prompt();
// let cut = input.split(" ");
// let result = "";
// cut[0]%2 == 0 ? result+="짝수 + ":result+="홀수 + "
// cut[1]%2 == 0 ? result+="짝수 = ":result+="홀수 = "
// if ((Number(cut[0])+Number(cut[1]))%2 == 0) {
//     result += "짝수"
// } else  {
//     result += "홀수"
// }
// console.log(result);

// 1162
// let input = prompt();
// let cut = input.split(" ");
// let result = Number(cut[0]) - Number(cut[1]) + Number(cut[2]);
// if ((result.toString())[result.toString().length-1] == "0") {
//     console.log("대박")
// } else {
//     console.log("그럭저럭")
// }

// 1163
// let input = prompt();
// let cut = input.split(" ");
// let result = Number(cut[0]) - Number(cut[1]) + Number(cut[2]);
// if ((result.toString())[result.toString().length-3]%2 == "0") {
//     console.log("대박")
// } else {
//     console.log("그럭저럭")
// }

// 1164
// let input = prompt();
// let cut = input.split(" ");
// let result = "";
// if ((Number(cut[0]) <= 170) || (Number(cut[1]) <= 170) || (Number(cut[2]) <= 170)) {
//     result = "crash";
// } else {
//     result = "pass";
// }
// console.log(result);

// 1165
// let input = prompt();
// let cut = input.split(" ");
// let score = Number(cut[1]);
// let time = Number(cut[0]);
// while (time < 90) {
//     score++;
//     time += 5;
// }
// console.log(score);

// 1166
// let input = Number(prompt());
// let result = "";
// if (input%400 == 0 || (input%4==0 && input%100 != 0)) {
//     result = "leap";
// } else {
//     result = "normal";
// }
// console.log(result);

// 1167
// let input = prompt();
// let cut = input.split(" ");
// let max = 0;
// let min = 9999999;
// let result = 0;
// for (let i = 0; i < cut.length; i++) {
//     if (min > Number(cut[i])) {
//         result = min;
//         min = cut[i];
//     }
// }
// console.log(result);

// 1168
// let input = prompt();
// let cut = input.split(" ");
// let result = 0;
// cut[0] = cut[0].substring(0,2);
// if (cut[1] >= 3) {
//     result = 12-Number(cut[0])+1;
// } else {
//     result = 112-Number(cut[0])+1;
// }
// console.log(result);

// 1170
// let input = prompt();
// let cut = input.split(" ");
// let result = "";

// if (cut[2] < 10) {
//     cut[2] = "0"+cut[2];
// }

// result = cut[0]+cut[1]+cut[2];
// console.log(result);

// 1171
// let input = prompt();
// let cut = input.split(" ");
// let result = "";

// if (cut[2] < 100 && cut[2] > 9) {
//     cut[2] = "0"+cut[2];
// }
// if (cut[2] < 10) {
//     cut[2] = "0"+"0"+cut[2];
// }
// if (cut[1] < 10) {
//     cut[1] = "0"+cut[1];
// }

// result = cut[0]+cut[1]+cut[2];
// console.log(result);

// 1172
// let input = prompt();
// let cut = input.split(" ");

// let max = Math.max(cut[0],cut[1],cut[2]);
// let min = Math.min(cut[0],cut[1],cut[2]);
// let side = 0;
// for (let i = 0; i < cut.length; i++) {
//     if (cut[i] != max && cut[i] != min) {
//         side = Number(cut[i]);
//     }
// }
// console.log(min+" "+side+" "+max);

// 1173
// let input = prompt();
// let cut = input.split(" ");
// let hour = Number(cut[0]);
// let minute = Number(cut[1]);

// if ((hour > 23 || minute > 59) || (hour < 0 || minute < 0)) {
//     console.log("error")
// } else {

// minute = minute - 30;
// if (minute < 0) {

//     hour--;
//     if (hour < 0) {
//         hour = hour+24
//     }
//     minute = 60+minute;
// }
// console.log(hour+" "+minute)
// }

// 1180
// let input = prompt();
// let cal = input[1]+input[0];
// let result = Number(cal)*2

// if (result > 99) {
//    result = result.toString()[1]+result.toString()[2];
// }

// if (Number(result) > 50) {
//     console.log(result+"\n"+"OH MY GOD");
// } else {
//     console.log(result+"\n"+"GOOD")
// }

// 1201
// let input = Number(prompt());
// if (input > 0) {
//     console.log("양수");
// } else if(input < 0) {
//     console.log("음수");
// } else {
//     console.log(0);
// }

// 1202
// let input = Number(prompt());

// if (input >= 90) {
//     console.log("A");
// } else if (input >= 80) {
//     console.log("B");
// } else if (input >= 70) {
//     console.log("C");
// } else if (input >= 60) {
//     console.log("D");
// } else {
//     console.log("F");
// }

// 1203
// let input = Number(prompt());

// if (input > 20) {
//     console.log("비만");
// } else if (input > 10) {
//     console.log("과체중");
// } else  {
//     console.log("정상");
// }

// 1204
// let input = Number(prompt());
// let str = input.toString();
// if ((Number(str) > 10 && Number(str) < 21)) {
//     str += "th";
// } else if (str[str.length-1] == 1) {
//         str = str+"st";
// } else if (str[str.length-1] == 2) {
//     str = str+"nd";
// } else if (str[str.length-1] == 2) {
//     str = str+"rd";
// } else {
//     str += "th";
// }
// console.log(str);

// 1205
// let input = prompt();
// let cut = (input.split(" ")).map(Number);
// let max = 0;
// if (cut[0] + cut[1] > max) {
//     max = cut[0] + cut[1];
// }
// if (cut[0] - cut[1] > max) {
//     max = cut[0] - cut[1];
// }
// if (cut[0] * cut[1] > max) {
//     max = cut[0] * cut[1];
// }
// if (cut[0] / cut[1] > max) {
//     max = cut[0] / cut[1];
// }
// if (cut[1] + cut[0] > max) {
//     max = cut[1] + cut[0];
// }
// if (cut[1] - cut[0] > max) {
//     max = cut[1] - cut[0];
// }
// if (cut[1] * cut[0] > max) {
//     max = cut[1] * cut[0];
// }
// if (cut[1] / cut[0] > max) {
//     max = cut[1] / cut[0];
// }
// console.log(max.toFixed(6));

// 1206
// let input = prompt();
// let cut = (input.split(" ")).map(Number);
// if (cut[1]%cut[0] == 0) {
//     console.log(cut[0]+"*"+cut[1]/cut[0]+"="+cut[1]);
// } else if (cut[0]%cut[1] == 0) {
//     console.log(cut[1]+"*"+cut[0]/cut[1]+"="+cut[0]);
// } else {
//     console.log("none")
// }

// 1207
// let input = prompt();
// let cut = (input.split(" ")).map(Number);
// let result = 0;

// for (let i = 0; i < cut.length; i++) {
//     result += cut[i];
// }

// switch (result) {
//     case 0:
//     console.log("모")
//     break;
//     case 1:
//     console.log("도")
//     break;
//     case 2:
//     console.log("개")
//     break;
//     case 3:
//     console.log("걸")
//     break;
//     case 4:
//     console.log("윷")
//     break;
//     default :
//     console.log("ERROR")
// }

// 1210
// let input = prompt();
// let cut = input.split(" ").map(Number);
// let result = 0;
// for (let i = 0; i < cut.length; i++) {
//   switch (cut[i]) {
//     case 1:
//       result += 400;
//       break;
//     case 2:
//       result += 340;
//       break;
//     case 3:
//       result += 170;
//       break;
//     case 4:
//       result += 100;
//       break;
//     case 5:
//       result += 70;
//       break;
//   }
// }
// result >= 500 ? console.log("angry"):console.log("no angry");

// 1212
// let input = prompt();
// let cut = input.split(" ").map(Number);
// let result = cut[2] < cut[0]+cut[1];
// console.log(result)

// 1214
// let input = prompt();
// let cut = input.split(" ").map(Number);
// let leap;

// if (cut[0]%400 == 0 || (cut[0]%4==0 && cut[0]%100 != 0)) {
//     leap = true;
// } else {
//     leap = false;
// }


// if (cut[1] == 2) {
//     if (leap) {
//         console.log("29");
//     } else {
//         console.log("28");
//     }
// }

// switch (cut[1]) {
//     case 12:
//         case 3:
//             case 5:
//                 case 7:
//                     case 8:
//                         case 10:
//                             case 1:
//                             console.log(31);
//                             break;
//     case 4:
//         case 6:
//             case 9:
//                 case 11:
//                     console.log(30);
//                     break;
// }

// 1216
// let input = prompt();
// let cut = input.split(" ").map(Number);

// if (cut[1] > cut[0]) {
//     if (cut[0]+cut[2] < cut[1]) {
//         console.log("advertise");
//     } else if (cut[0]+cut[2] > cut[1]) {
//         console.log("do not advertise");
//     } else {
//         console.log("does not matter");
//     }
// } else if(cut[1] < cut[0]) {
//     console.log("do not advertise");
// } else {
//     console.log("does not matter");
// }

// 1218
// let input = prompt();
// let cut = input.split(" ").map(Number);
// let result = "";
// if (cut[0] == cut[1] && cut[0] == cut[2]) {
//     result = "정삼각형";
// } else
// if (cut[0] == cut[1] || cut[0] == cut[2] || cut[1] == cut[2]) {
//     result = "이등변삼각형";
// } 
// else if (Math.pow(cut[0], 2)+Math.pow(cut[1], 2) == Math.pow(cut[2], 2)) {
//     result = "직각삼각형";
// }
// else if (cut[2] < cut[0]+cut[1]) {
//     result = "삼각형";
// } else {
//     result = "삼각형 아님";
// }
// console.log(result)

// 1222
// let input = prompt();
// let cut = input.split(" ");
// let score = Number(cut[1]);
// let time = Number(cut[0]);
// let result = "";

// while (time < 90) {
//     score++;
//     time += 5;
// }

// if (score > Number(cut[2])) {
//     result = "win";
// } else if (score < Number(cut[2])) {
//     result = "lose";
// } else  {
//     result = "same";
// }
// console.log(result);

// 1224
// let input = prompt();
// let cut = input.split(" ").map(Number);
// let result = "";

// if (cut[0]/cut[1] > cut[2]/cut[3]) {
//     result = ">";
// } else if (cut[0]/cut[1] < cut[2]/cut[3]) {
//     result = "<";
// } else {
//     result = "=";
// }

// console.log(result);

// 1226
// let input = prompt();
// let input2 = prompt();
// let cut = input.split(" ").map(Number);
// let cut2 = input2.split(" ").map(Number);
// let bonus = cut[6];
// let count = 0;
// let countBonus = 0;
// let result = "";
// for (let i = 0; i < cut2.length; i++) {
//     for (let j = 0; j < cut2.length; j++) {
//         if (cut2[j] == cut[i]) {
//             // console.log(cut.length+","+cut2.length);
//             count++;
//         }
//     }
// }

// for (let i = 0; i < cut2.length; i++) {
//     if (cut2[i] == bonus) {
//         countBonus++;
//     }
// } 

// if (count == 6) {
//         result = "1등"
// } else if (count == 5) {
//     if (countBonus == 1) {
//         result = "2등";
//     } else {
//         result = "3등"
//     }
// } else if (count == 4) {
//     result = "4등"
// } else if (count == 3) {
//     result = "5등"
// } else {
//     result = "꽝"
// }


// console.log(result);

// 1228
// let input = prompt();
// let cut = input.split(" ").map(Number);
// let result = "";
// let avgWeight = (cut[0]-100)*0.9;
// let bmi = ((cut[1]-avgWeight)*100)/avgWeight;

// if (bmi > 20) {
//     result = "비만";
// } else if (bmi > 10) {
//     result = "과체중"
// } else {
//     result = "정상"
// }

// console.log(result);

// 1229
// let input = prompt();
// let cut = input.split(" ").map(Number);
// let result = "";
// let avgWeight = 0;

// // 표준 몸무게 구하는 공식
// if (cut[0] < 150) {
//     avgWeight = cut[0]-100;
// } else if (cut[0] >= 150 && cut[0] < 160) {
//     avgWeight = (cut[0]-150)/2+50;
// } else {
//     avgWeight = (cut[0]-100)*0.9;
// }

// // 비만도 계산 공식
// let bmi = ((cut[1]-avgWeight)*100)/avgWeight;

// // 비만도에 따른 등급 판정
// if (bmi > 20) {
//     result = "비만";
// } else if (bmi > 10) {
//     result = "과체중"
// } else {
//     result = "정상"
// }

// console.log(result);


// 1230
// let input = prompt();
// let cut = input.split(" ").map(Number);
// let result = "";
// // 첫번째 터널이 170이하라면 
// if (cut[0] <= 170) {
//     result = "crash, "+cut[0];
//     // 두번째 터널이 170 이하라면
// } else if (cut[1] <= 170) {
//     result = "crash, "+cut[1];
//     // 3번째 터널이 170 이하라면
// } else if (cut[2] <= 170) {
//     result = "crash, "+cut[2];
//     // 터널 중 170이하가 없다면
// } else {
//     result ="pass"
// }
// console.log(result);

// 1231
// let input = prompt();
// let result = "";
//     // 만약 input에 +가 포함되어 있다면
//     if (input.includes("+")) {
//         let cut = input.split("+").map(Number);
//         result = cut[0]+cut[1];
//         // 만약 input에 -가 포함되어 있다면
//     } else if (input.includes("-")) {
//         let cut = input.split("-").map(Number);
//         result = cut[0]-cut[1];
//         // 만약 input에 *이 포함되어 있다면
//     } else     if (input.includes("*")) {
//         let cut = input.split("*").map(Number);
//         result = cut[0]*cut[1];
//         // 만약 input에 /이 포함되어 있다면
//     } else     if (input.includes("/")) {
//         let cut = input.split("/").map(Number);
//         result = (cut[0]/cut[1]).toFixed(2);
//         // input에 /이 포함되어 있는데 나누는 숫자중 하나가 0이라면
//         if (cut[0] == 0 || cut[1] == 0) {
//             result = "error";
//         }
//     }
// console.log(result);






