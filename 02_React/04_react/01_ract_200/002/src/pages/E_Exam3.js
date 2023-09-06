import React from 'react'
// 연습문제 3)
// 결과 출력 : 이 책의 이름은 처음 만난 파이썬 입니다.
function E_Exam3(name) {
  return (
    <div>
        <h1>{`이 책의 이름은 ${name.name}입니다.`}</h1>
        <h2>{"이 책은 총 "+name.numOfPage+" 페이지 입니다."}</h2>
    </div>
  )
}

export default E_Exam3