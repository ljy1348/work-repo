// 자식 컴포넌트(typescript 적용된 버전)
// 타입 스크립트 파일명 종류 : .tsx(jsx 표현식을 사용), ts(일반 js)
// 리액트의 jsx:{값}

import React, { useState } from 'react'
import IObject from '../types/IObject';

function Basic() {
    // 일반 변수 정의
    // 사용법 : let 변수명: 자료형 = 값;
    // 자료형 : 문자열 = string, 숫자 = number, 
    //         참/거짓 = boolean, 객체 = 따로 정의
    let message2: string = "일반 변수 출력입니다.";
    let num2 : number =  1;
    let bflag2:boolean = false;
    // 객체는 자료형을 개발자가 따로 정의해서 사용함
    // IObject = {id?:any|null, name:string}
    // IObject라는 타입에서는 
    // id는 any(모든 자료형 허용), 값이 없으면 null
    // name은 string 자료형만 올 수 있음
    let obj2: IObject = {
        id : null,
        name : "green"
    }

    // 바인딩 변수
    // 사용법 : let [변수명, set변수명] = useState<자료형>(초기값);
    let [message, setMessage] = useState<string>("바인딩 변수 출력입니다.");
    let [num, setNum] = useState<number>(1);
    let [bflag, setBflag2] = useState<boolean>(true);
    let [obj, setObj] = useState<IObject>({name:"green"});
    let [arr, setArr] = useState<Array<string>>(["c","d","e"]);
    let [objArr, setObjArr] = useState<Array<IObject>>([{name:"객체배열 바인딩"},{name:"green"}]);


    //TODO: 유니온 사용법 : let 변수명: 자료형 | 자료형2 ... = 값;
    // 변수에 자료형이 2개 이상 선택적으로 들어 올 때 사용.
    // 변수에 자료형을 여러개 사용할 수 있다.
    // let num3: number | string = 1; 
    // let num4: number | string = "유니온 사용법"; 
    // let num5: number | string = true; <- 에러
    
    // TODO: 3) 옵셔널(?) : 객체의 속성이나 함수의 매개변수에 사용가능
    // 사용하면, 오류가 있어도 무시하고 실행 가능함
    // 자료형에 | undefined 더 붙은것과 같은 의미
    function hello(name?: string) {
      console.log(`안녕하세요 ${name}`);
    }
    hello();
    hello("홍길동")

    // TODO: 4) 배열 : let 변수:Array<자료형 | 자료형2...> = [];
    // 변수 및 함수 사용시 반드시 정의된 자료형의 값으로 사용하게 강제함
    let arr2 : Array<string> = ["a","b","c"];
    let arr3 : Array<number> = [1,2,3];
    let arr4 : Array<any> = [1,2,"c"];
    // TODO: 객체 배열
    let objArr2:Array<IObject> = [{id:1, name:"green2"}]; // json 문서 형태(객체 배열);


  return (
    <div>
        문자(일반) : {message2}
        <br/>
        문자(바인딩) : {message}
        <br/>
        숫자(일반) : {num2}
        <br/>
        숫자(바인딩) : {num}
        <br/>
        참/거짓(일반) : {bflag2? "참":"거짓"}
        <br/>
        참/거짓(바인딩) : {bflag? "참":"거짓"}
        <br/>
        객체(일반) : {obj2.name}
        <br/>
        객체(바인딩) : {obj.name}
        <br/>
        배열(일반) : {arr2}
        <br/>
        배열(바인딩) : {arr}
        <br/>
        객체배열(일반) : {objArr2.map((value)=>{
          return value.name
        })}
        <br/>
        객체배열(바인딩) : {objArr.map((value)=>{
          return value.name+",";
        })}
        <br/>
        객체배열(바인딩) : {objArr[0].name}
    </div>
  )
}

export default Basic