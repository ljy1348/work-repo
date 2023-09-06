// 1001
// document.querySelector("#app").innerHTML = "Hello";

// 1002
// document.querySelector("#app").innerHTML = "Hello World";

// 1003
// document.querySelector("#app").innerHTML = "Hello<br>World";

// 1004
// document.querySelector("#app").innerHTML = "'Hello'";

// 1005
// document.querySelector("#app").innerHTML = '"Hello World"';

// 1006
// document.querySelector("#app").innerHTML = '"!@#$%^&*()"';

// 1007
// document.querySelector("#app").innerHTML = '"C:\\Download\\hello.cpp"';

// 1008
// document.querySelector("#app").innerHTML = "\u250C\u252c\u2510<br>\u251c\u253c\u2524<br>\u2514\u2534\u2518";

// 1010
// let num = 0;
// num = Number(prompt(""));
// document.querySelector("#app").innerHTML = num;

// 1011
// let input = prompt("");
// document.querySelector("#app").innerHTML = input;

// 1012
// let input = prompt("");
// document.querySelector("#app").innerHTML = input;

// 1013
// let input = prompt("");
// let result = input.split(" ");
// document.querySelector("#app").innerHTML = result;

// 1014
// let input = prompt("");
// let result = input.split(" ");
// console.log(result);
// document.querySelector("#app").innerHTML = result[1]+" "+ result[0];

// 1015
// let input = Number(prompt(""));
// document.querySelector("#app").innerHTML = input.toFixed(2)

// 1017
// let input = prompt("");
// document.querySelector("#app").innerHTML = input+" "+input+" "+input+" ";

// 1018
// let input = prompt("");
// let result = input.split(":");
// document.querySelector("#app").innerHTML = result[0]+" : "+result[1];

// 1019
// let input = prompt("");
// let result = input.split(".");
// document.querySelector("#app").innerHTML = result[0]+" . 0"+result[1].slice(-1)+" . 0"+result[2].slice(-1);

// 1020
// let input = prompt("");
// document.querySelector("#app").innerHTML = input.replace('-',"");

// 1021
// let input = prompt("");
// document.querySelector("#app").innerHTML = input;

// 1022
// let input = prompt("");
// document.querySelector("#app").innerHTML = input;

// 1023
// let input = prompt("");
// let result = input.split(".");
// document.querySelector("#app").innerHTML = result[0]+"<br>"+result[1];

// 1024
// let input = prompt("");
// let result = "";
// for (let i = 0; i < input.length; i++){
// result += "'"+input[i]+"'"+"<br>";
// }
// document.querySelector("#app").innerHTML = result

// 1025
// let input = prompt("");
// let result = "";

// result += input[0]+"0000<br>";
// result += input[1]+"000<br>";
// result += input[2]+"00<br>";
// result += input[3]+"0<br>";
// result += input[4];

// document.querySelector("#app").innerHTML = result;

// 1026
// let input = prompt();
// let result = input.split(":");
// document.querySelector("#app").innerHTML = result[1];

// 1027
// let input = prompt();
// let result = input.split(".");
// document.querySelector("#app").innerHTML = result[2]+"-"+result[1]+"-"+result[0];

// 1028
// let input = Number(prompt());
// document.querySelector("#app").innerHTML = input

// 1029
// let input = Number(prompt());
// document.querySelector("#app").innerHTML = input.toFixed(11);

// 1030
// let input = Number(prompt());
// document.querySelector("#app").innerHTML = input

// 1031
// let input = Number(prompt());
// document.querySelector("#app").innerHTML = input.toString(8);

// 1032
// let input = Number(prompt());
// document.querySelector("#app").innerHTML = (input.toString(16));

// 1033
// let input = Number(prompt());
// document.querySelector("#app").innerHTML = (input.toString(16)).toUpperCase();

// 1034
// let input = (prompt());
// let count = input.length;
// let result = 0;
// for (let i = 0; i < input.length; i++) {
//     result += Number(input[i])*Math.pow(8,count-1);
//     count--;
// }
// document.querySelector("#app").innerHTML = result;

// 1035
// let input = prompt();
// let result = (parseInt(input, 16)).toString(8);
// document.querySelector("#app").innerHTML = result;

// 1036
// let input = prompt();
// let result = input.charCodeAt();
// document.querySelector("#app").innerHTML = result;

// 1037
// let input = Number(prompt());
// let result = String.fromCharCode(input);
// document.querySelector("#app").innerHTML = result;

// 1038
// let input = prompt();
// let cut = input.split(" ");
// let result = Number(cut[0])+Number(cut[1]);
// document.querySelector("#app").innerHTML = result;

// 1039
// let input = prompt();
// let cut = input.split(" ");
// let result = Number(cut[0])+Number(cut[1]);
// document.querySelector("#app").innerHTML = result;

// 1040
// let input = Number(prompt());
// document.querySelector("#app").innerHTML = (-1)*input;

// 1041
// let input = prompt();
// let result = input.charCodeAt()+1;
// document.querySelector("#app").innerHTML = String.fromCharCode(result);

// 1042
// let input = prompt();
// let cut = input.split(" ");
// let result = cut[0]/cut[1];
// document.querySelector("#app").innerHTML = Math.floor(result);

// 1043
// let input = prompt();
// let cut = input.split(" ");
// let result = cut[0]%cut[1];
// document.querySelector("#app").innerHTML = result;


// 1044
// let input = Number(prompt());
// let result = input+1;
// document.querySelector("#app").innerHTML = result;

// 1045
// let input = prompt();
// let cut = input.split(" ");
// let result = "";
// let sum = Number(cut[0])+Number(cut[1]);
// result += sum+"<br>";
// result += cut[0] - cut[1]+"<br>";
// result += cut[0] * cut[1]+"<br>";
// result += Math.floor(cut[0] / cut[1])+"<br>";
// result += cut[0] % cut[1]+"<br>";
// result += (cut[0]/cut[1]).toFixed(2);
// document.querySelector("#app").innerHTML = result;

// 1046
// let input = prompt();
// let cut = input.split(" ");
// let result = "";
// let sum = Number(cut[0])+Number(cut[1])+Number(cut[2]);
// let avg = (sum/3).toFixed(1);
// document.querySelector("#app").innerHTML = sum+"<br>"+avg;

// 1047
// let input = Number(prompt());
// let result = input<<1;
// document.querySelector("#app").innerHTML = result;

// 1048
// let input = prompt();
// let cut = input.split(" ");

// for (let i = 1; i <= cut[1]; i++) {
// cut[0] = cut[0]<<1;
// }
// document.querySelector("#app").innerHTML = cut[0];

// 1049
// let input = prompt();
// let cut = input.split(" ");
// let result = 0;
// if (cut[0] > cut[1]) {
//     result = 1;
// }
// document.querySelector("#app").innerHTML = result;

// 1050
// let input = prompt();
// let cut = input.split(" ");
// let result = 0;
// if (cut[0] == cut[1]) {
//     result = 1;
// }
// document.querySelector("#app").innerHTML = result;

// 1051
// let input = prompt();
// let cut = input.split(" ");
// let result = 0;
// if (cut[1] > cut[0]) {
//     result = 1;
// }
// document.querySelector("#app").innerHTML = result;

// 1052
// let input = prompt();
// let cut = input.split(" ");
// let result = 0;
// if (cut[1] != cut[0]) {
//     result = 1;
// }
// document.querySelector("#app").innerHTML = result;

// 1053
// let input = Boolean(Number(prompt()));
// let result = !input;
// document.querySelector("#app").innerHTML = Number(result);

// 1054
// let input = prompt();
// let cut = input.split(" ");
// let result = Boolean(Number(cut[0])) && Boolean(Number(cut[1]))
// document.querySelector("#app").innerHTML = Number(result);

// 1055
// let input = prompt();
// let cut = input.split(" ");
// let result = Boolean(Number(cut[0])) || Boolean(Number(cut[1]))
// document.querySelector("#app").innerHTML = Number(result);

// 1056
// let input = prompt();
// let cut = input.split(" ");
// let result1 = Boolean(Number(cut[0])) && !Boolean(Number(cut[1]))
// let result2 = !Boolean(Number(cut[0])) && Boolean(Number(cut[1]))
// document.querySelector("#app").innerHTML = Number(result1 || result2);

// 1057
// let input = prompt();
// let cut = input.split(" ");
// let result1 = Boolean(Number(cut[0])) && !Boolean(Number(cut[1]))
// let result2 = !Boolean(Number(cut[0])) && Boolean(Number(cut[1]))
// document.querySelector("#app").innerHTML = Number(!(result1 || result2));

// 1058
// let input = prompt();
// let cut = input.split(" ");
// let result1 = Boolean(Number(cut[0])) || Boolean(Number(cut[1]))
// document.querySelector("#app").innerHTML = Number(!result1);

// 1059
// let input = prompt();
// let result = ~input;
// document.querySelector("#app").innerHTML = Number(result)

// 1060
// let input = prompt();
// let cut = input.split(" ");
// let result = cut[0]&cut[1];
// document.querySelector("#app").innerHTML = Number(result)

// 1061
// let input = prompt();
// let cut = input.split(" ");
// let result = cut[0] | cut[1];
// document.querySelector("#app").innerHTML = Number(result)

// 1062
// let input = prompt();
// let cut = input.split(" ");
// let result = cut[0] ^ cut[1];
// document.querySelector("#app").innerHTML = Number(result)

// 1063
// let input = prompt();
// let cut = input.split(" ");
// let result = Math.max(cut[0], cut[1]);
// document.querySelector("#app").innerHTML = Number(result)

// 1064
// let input = prompt();
// let cut = input.split(" ");
// let result = Math.min(cut[0], cut[1], cut[2]);
// document.querySelector("#app").innerHTML = Number(result)

// 1065
// let input = prompt();
// let cut = input.split(" ");
// let result = "";
// for (let i = 0; i < cut.length; i++) {
//     if (Number(cut[i])%2 == 0) {
//         result += cut[i]+"<br>";
//     }
// }
// document.querySelector("#app").innerHTML = result;

// 1066
// let input = prompt();
// let cut = input.split(" ");
// let result = "";
// for (let i = 0; i < cut.length; i++) {
//     if (Number(cut[i])%2 == 0) {
//         result += "even"+"<br>";
//     } else {
//         result += "odd"+"<br>"
//     }
// }
// document.querySelector("#app").innerHTML = result;

// 1067
// let input = Number(prompt());
// let result = "";
// if (input >= 0) {
//     result += "plus <br>"
// } else {
//     result += "minus <br>"
// }
// if (input%2 == 0) {
//     result += "even <br>"
// } else {
//     result += "odd <br>"
// }
// document.querySelector("#app").innerHTML = result;

// 1068
// let input = Number(prompt());
// let result = "";
// if (input <= 100 && input >= 90) {
//     result = "A";
// } else if (input < 90 && input >= 70) {
//     result = "B";
// } else if (input < 70 && input >= 40) {
//     result = "C";
// } else if (input < 40 && input >= 0) {
//     result = "D";
// }
// document.querySelector("#app").innerHTML = result;

// 1069
// let input = prompt();
// let result = "";
// switch (input) {
//     case 'A':
//         result = "best!!";
//         break;
//     case 'B' :
//         result = "good!!";
//         break;
//     case 'C' :
//         result = "run!";
//         break;
//     case 'D' :
//         result = "slowly~";
//         break;
//     default :
//         result = "what?";
// }
// document.querySelector("#app").innerHTML = result;

// 1070
// let input = Number(prompt());
// let result = "";
// switch (input) {
//     case 1:
//         case 2:
//             case 12 :
//         result = "winter";
//         break;
//     case 3 :
//         case 4 :
//             case 5 :
//         result = "spring";
//         break;
//     case 6 :
//         case 7 :
//             case 8 :
//         result = "summer";
//         break;
//     case 9 :
//         case 10 :
//             case 11 :
//         result = "fall";
//         break;
//     default :
//         result = "what?";
// }
// document.querySelector("#app").innerHTML = result;

// 1071
// let input = prompt();
// let cut = input.split(" ");
// let result = "";
// for (let i = 0; i < cut.length; i++){
//     if (cut[i] == 0) {
//         break;
//     }
//     result += cut[i]+"<br>"
// }
// document.querySelector("#app").innerHTML = result;

// 1072
// let input = Number(prompt());
// let input2 = prompt();
// let cut = input2.split(" ");
// let result = "";
// for (let i = 0; i < input; i++) {
//     result += cut[i]+"<br>";
// }
// document.querySelector("#app").innerHTML = result;

// 1073
// let input = prompt();
// let cut = input.split(" ");
// let result = "";
// for (let i = 0; i < cut.length; i++){
//     if (cut[i] == 0) {
//         break;
//     }
//     result += cut[i]+"<br>"
// }
// document.querySelector("#app").innerHTML = result;

// 1074
// let input = Number(prompt());
// while (!(input == 0)) {
//     document.querySelector("#app").innerHTML += input+"<br>";
//     input--;
// }

// 1075
// let input = Number(prompt());
// while (!(input == 0)) {
//     input--;
//     document.querySelector("#app").innerHTML += input+"<br>";
// }

// 1076
// let input = prompt();
// let count = input.charCodeAt()-'a'.charCodeAt();
// let result = "";
// for (let i = 'a'.charCodeAt(); i <= input.charCodeAt(); i++) {
//     result += String.fromCharCode(i)+" "
// }
// document.querySelector("#app").innerHTML = result

// 1077
// let input = Number(prompt());
// let result = "";
// for (let i = 0; i <= input; i++) {
//     result += i+"<br/>";
// }
// document.querySelector("#app").innerHTML = result;

// 1078
// let input = Number(prompt());
// let result = 0;

// for (let i = 1; i <= input; i++){
//     if (i%2 == 0) {
//         result += i;
//     }
// }
// document.querySelector("#app").innerHTML = result;

// 1079
// let input = prompt();
// let cut = input.split(" ");
// let result = "";
// for (let i = 0; i < cut.length; i++) {
//     if (cut[i] == 'q') {
//         result += cut[i]
//         break;
//     }
//     result += cut[i]+"<br/>"
// }
// document.querySelector("#app").innerHTML = result;

// 1080
// let input = Number(prompt());
// let sum = 0;
// let result = 0;
// for (let i = 1; i < input; i++) {
//     sum += i;
//     if (sum >= input) {
//         result = i;
//         break;
//     }
// }
// document.querySelector("#app").innerHTML = result;

// 1081
// let input = prompt();
// let cut = input.split(" ");
// let result = "";
// for (let i = 1; i <= Number(cut[0]); i++) {
//     for (let j = 1; j <= Number(cut[1]); j++) {
//         result += i+" "+j+"<br/>"
//     }//for j 
// }//for i
// document.querySelector("#app").innerHTML = result;

// 1082
// let input = prompt();
// let hex = parseInt(input, 16);
// let result = "";

// for (let i = 1; i < 16; i++) {
//     let cal = i*hex
//     result += input.toString(16)+"*"+i.toString(16)+"="+cal.toString(16)+"<br/>"
// }
// document.querySelector("#app").innerHTML = result;
// console.log(result);

// 1083
// let input = Number(prompt());
// let result = "";
// for (let i = 1; i <= input; i++) {
//     switch (i){
//         case 3 :
//             case 6 :
//                 case 9:
//                     result += "X "
//                     break;
//         default :
//         result += i+" ";
//     }
// }
// document.querySelector("#app").innerHTML = result;


// 1084
// let input = prompt();
// let cut = input.split(" ");
// let result = "";
// let count = 0;
// for (let i = 0; i < cut[0]; i++) {
//     for (let j = 0; j < cut[1]; j++) {
//         for (let k = 0; k < cut[2]; k++) {
//             result += i+" "+j+" "+k+"<br/>"
//             count++;
//         }
//     }
// }
// document.querySelector("#app").innerHTML = result+count;

// 1085
// let input = prompt();
// let cut = input.split(" ");
// let cal = (cut[0]*cut[1]*cut[2]*cut[3])/8
// let result = "";
// let count = 0;
// while (cal > 1024) {
// if (cal > 1024) {
//     cal = cal/1024
//     count++
// }
//     result = cal.toFixed(1);

// }
// if (count == 1) {
//     result += "KB";
// } else if (count == 2) {
//     result += "MB";
// } else if (count == 3) {
//     result += "GB";
// } else if (count == 4) {
//     result += "TB";
// }
// document.querySelector("#app").innerHTML = result;

// 1086
// let input = prompt();
// let cut = input.split(" ");
// let cal = (cut[0]*cut[1]*cut[2])/8
// let result = "";
// let count = 0;
// while (cal > 1024) {
// if (cal > 1024) {
//     cal = cal/1024
//     count++
// }
//     result = cal.toFixed(2);

// }
// if (count == 1) {
//     result += "KB";
// } else if (count == 2) {
//     result += "MB";
// } else if (count == 3) {
//     result += "GB";
// } else if (count == 4) {
//     result += "TB";
// }
// document.querySelector("#app").innerHTML = result;

// 1087
// let input = Number(prompt());
// let sum = 0;
// let result = 0;
// for (let i = 1; i < input; i++) {
//     sum += i;
//     if (sum >= input) {
//         result = sum;
//         break;
//     }
// }
// document.querySelector("#app").innerHTML = result;

// 1088
// let input = Number(prompt());
// let result = "";
// for (let i = 1; i <= input; i++) {
//     if (i%3 == 0){
//         continue;
//     }
//     result += i+" ";
// }
// document.querySelector("#app").innerHTML = result;

// 1089
// let input = prompt();
// let cut = input.split(" ");
// let result = Number(cut[0]);

// for (let i = 1; i < cut[2]; i++) {
//     result += Number(cut[1]);
// }
// document.querySelector("#app").innerHTML = result;

// 1090
// let input = prompt();
// let cut = input.split(" ");
// let result = Number(cut[0]);

// for (let i = 1; i < cut[2]; i++) {
//     result *= Number(cut[1]);
// }
// document.querySelector("#app").innerHTML = result;

// 1091
// let input = prompt();
// let cut = input.split(" ");
// let result = Number(cut[0]);

// for (let i = 1; i < cut[3]; i++) {
//     result *= Number(cut[1]);
//     result += Number(cut[2]);
// }
// document.querySelector("#app").innerHTML = result;

// 1092
// let input = prompt();
// let cut = input.split(" ");
// let day = 1;
// while (day%cut[0] != 0 || day%cut[1] != 0 || day%cut[2] != 0) {
//     day++;
// }
// document.querySelector("#app").innerHTML = day;

// 1093
// let input = Number(prompt());
// let input2 = prompt();
// let cut = input2.split(" ");
// let result = [];
// result.length = 23;
// result.fill(0);
// for (let i = 0; i < input; i++) {
//     for (let j = 1; j <= result.length; j++) {
//         if (cut[i] == j) {
//             result[j-1]++;
//             console.log(j)
//         }
//     }
// }

// // 공백을 두고 출력
// let result2 = "";
// for (let i = 0; i < result.length; i++) {
//     result2 += result[i]+" ";
// }

// document.querySelector("#app").innerHTML = result2;

// 1094
// let input = Number(prompt());
// let input2 = prompt();
// let cut = input2.split(" ");
// let result = cut.reverse();

// // 공백을 두고 출력
// let result2 = "";
// for (let i = 0; i < result.length; i++) {
//     result2 += result[i]+" ";
// }
// // 결과 출력
// document.querySelector("#app").innerHTML = result2;

// 1095
// let input = Number(prompt());
// let input2 = prompt();
// let cut = input2.split(" ");
// let min = 9999999;
// for (let i = 0; i < input; i++) {
//     console.log(cut[i])
//     if (min > Number(cut[i])) {
//         min = cut[i];
//     }
// }
// document.querySelector("#app").innerHTML = min;


// ------------------------------------------------------------------------------
// 1096
// // 2차원 배열 선언
// const arr = new Array(19).fill(0).map(() => new Array(2));

// // 배열 arr 0으로 초기화
// for (let i = 0; i < 19; i++) {
//     for (let j = 0; j < 19; j++) {
//         if(j == 18) {
//             arr[i][j] = 0;
//         } else {
//         arr[i][j] = 0;
//         }
//     }

// }

// // 입력값 받기
// let count = Number(prompt());

// // 입력값의 좌표를 1로 바꾸기
// for (let i = 0; i < count; i++) {
//     let input = (prompt());
//     let cut = input.split(" ");
//     arr[cut[0]-1][cut[1]-1] = 1;
//     console.log(i+","+cut[0]+","+cut[1]+","+arr[cut[0]][cut[1]])
// }

// // 결과를 확인하기 위해 result에 배열 값 넣기
// let result = "";
// for (let i = 0; i < 19; i++) {
//     for (let j = 0; j < 19; j++) {
//         if(j == 18) {
//             result += arr[i][j]+"<br>";
//         } else {
//         result += arr[i][j]+" ";

//     }

// }
// }

// // 결과 출력
// document.querySelector("#app").innerHTML = result;
// ------------------------------------------------------------------------------


// 1097
// 2차원 배열 선언
// const arr = new Array(19).fill(0).map(() => new Array(2));

// // 배열 arr 0으로 초기화
// for (let i = 0; i < 19; i++) {
//     for (let j = 0; j < 19; j++) {
//         if(j == 9) {
//             arr[i][j] = 1;
//         } else if(j == 11) {
//             arr[i][j] = 1;
//         } else if(i == 9) {
//             arr[i][j] = 1;
//         } else if(i == 11) {
//             arr[i][j] = 1;
//         } else{
//         arr[i][j] = 0;
//         }
//     }
// }

// // 입력값 받기
// let count = Number(prompt());

// // 입력값의 좌표를 기준으로 십자 바꾸기
// for (let i = 0; i < count; i++) {
//     let input = (prompt());
//     let cut = input.split(" ");
    
//     for (let j = 0; j < 19; j++) {
//         if (arr[j][cut[1]-1] == 0) {
//             arr[j][cut[1]-1] = 1;
//         } else {
//             arr[j][cut[1]-1] = 0;
//         }
//     }
//     for (let j = 0; j < 19; j++) {
//         if (arr[cut[0]-1][j] == 0) {
//             arr[cut[0]-1][j] = 1;
//         } else {
//             arr[cut[0]-1][j] = 0;
//         }
//     }

// }

// // 결과를 확인하기 위해 result에 배열 값 넣기
// let result = "";
// for (let i = 0; i < 19; i++) {
//     for (let j = 0; j < 19; j++) {
//         if(j == 18) {
//             result += arr[i][j]+"<br>";
//         } else {
//         result += arr[i][j]+" ";

//     }

// }
// }

// // 결과 출력
// document.querySelector("#app").innerHTML = result;

// -----------------------------------------------------------------------------




