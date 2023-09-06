import React, { useState } from 'react'
// 연습문제
// 최초화면 => "안녕하세요"
// 결과 => "안녕"

function C_Exam() {
    let [hi, setElement] = useState("안녕하세요")

    let myClick = () => {
        setElement("안녕");
    }

    return (
    <div>{hi}
    <button onClick={myClick}>문자열 변경</button>
    </div>

  )
}

export default C_Exam