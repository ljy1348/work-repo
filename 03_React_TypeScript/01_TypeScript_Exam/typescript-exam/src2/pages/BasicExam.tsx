import React, { useState } from 'react'

function BasicExam() {
    let [str, setStr] = useState<string>("안녕하세요 그린 컴퓨터 아카데미입니다.");
    let [str2, setStr2] = useState<string>("아래는 곱셈 샘플입니다.");
    let [str3, setStr3] = useState<string>("곱셈");
    let [num1, setNum1] = useState<number>(2);
    let [num2, setNum2] = useState<number>(3);

  return (
    <div style={{textAlign : "left", marginLeft:"50px"}}>
        {/* 바인딩 변수를 사용해서 화면 출력(타입 스크립트 코드를 작성하여 출력하세요.) */}
    {/* 결과 :
        안녕하세요 그린컴퓨터 아카데미입니다.
        아래는 곱셈 샘플입니다.
        곱셈
        2 * 3 = 6 */}
        {str}<br/>
        {str2}<br/>
        {str3}<br/>
        {num1}*{num2} = {num1*num2}
    </div>
  )
}

export default BasicExam