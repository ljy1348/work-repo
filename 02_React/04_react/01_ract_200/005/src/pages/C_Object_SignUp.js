import React, { useState } from 'react'

function C_Object_SignUp() {
    let [customer, setCustomer] = useState({
        name : "",
        gender : "남자"
    })

    // 변수가 객체일때 사용 가능한 방법
    let handleChange = (event) => {
        // 화면의 변경값 = event.target.value
        // 화면에 변경하고 있는 태그 = event.target.name
        // 예) input 변겨하고 있음 = input.name = name
        //     select 변경하고 있음 = select.name = gender
        // name === customer.name 속성명 같음
        // gender === customer.gender 속성명 같음
        // value = 변경 되는 값
        let attrValue = event.target.value; 
        // name = 변경되는 태그의 name(이름 창에 입력하면 name, 성별을 바꾸면 gender가 된다.)
        let attrName = event.target.name; 
        // customer  객체의 속성의 값을 수정
        // 스프레드 연산자를 사용
        setCustomer({...customer, [attrName] : attrValue})

    }

    let handleSubmit = (event) => {
        event.preventDefault(); // 기본기능(새로고침) 중지 함수
        alert(customer.name+customer.gender)
    }


  return (
    <div className="container">
    <form>
        {/* 이름 시작 */}
      <label>
        이름:
        {/* 데이터 바인딩 : value={name} 
           name = "aaa" -> 화면 "aaa"
        */}
        <input
          type="text"
          value={customer.name}
          name="name"
          onChange={handleChange}
        />
      </label>
      {/* 이름 끝 */}
      <br />
      {/* 성별 시작 */}
      <label>
        성별:
        {/* value : 먼저 선택된값 */}
        <select value={customer.gender} name="gender" onChange={handleChange}>
          <option value="남자">남자</option>
          <option value="여자">여자</option>
        </select>
      </label>
      {/* 성별 끝 */}
      {/* 제출(submit) 버튼 */}
      {/* 기본 특징 : 페이지 이동 */}
      <button type="submit" onClick={handleSubmit}>
        제출
      </button>
      {/* 제출 끝 */}
    </form>
  </div>
  )
}

export default C_Object_SignUp