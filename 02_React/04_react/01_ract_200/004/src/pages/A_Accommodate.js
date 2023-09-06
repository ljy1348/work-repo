// 리액트의 조건문 : 삼항 연산자 or 논리 연산자
import React from 'react'
import "../assets/styles.css"
import { useState } from 'react';
function A_Accommodate() {
    //  변수 정의
    let [isFull, setIsFull] = useState(true);
    // 카운트 변수
    let [count, setCount] = useState(0);

    let countUp = () => {
        setCount(count+1);
    }
    let countDown = () => {
        setCount(count-1);
    }
    
  return (
    <div>
        {/* 카운트 변수 화면 출력 */}
        <p>{`총 ${count} 명을 수용했습니다.`}</p>
        {
            count < 10 &&
        <button onClick={countUp} className='btn btn-primary'>입장</button>
} {
            count > 9 &&
        <button className='btn btn-primary'>입장</button>
} 
        <br/>
        {
            count > 0 &&
        <button onClick={countDown} className='btn btn-warning'>퇴장</button>
}
{
            count < 1 &&
        <button className='btn btn-warning'>퇴장</button>
}
        {
            // 사용법 : 변수 && 실행문
            //          변수가 true라면 실행문 실행
            // isFull && <- isFull이 true이기 때문에 밑의 <p></p>태그 실행됨
            count>9 &&
            <p style={{color: "red"}}>정원이 가득찼습니다.</p>
        }
    </div>
  )
}

export default A_Accommodate