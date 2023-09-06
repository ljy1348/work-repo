import React, { useState } from 'react'
import "../assets/chapter15.css"

function Add_Dept() {
  // 변수 정의 (바인딩 변수 : useState())
  // 임시 객체
  let initDept = {
    dname : "", // 부서명
    loc : "", // 부서 위치
  };

  let [dept, setDept] = useState(initDept); // input 부서명/부서위치


  // 함수 정의
  // 역바인딩 함수 : onChange의 함수와 바인딩 (개발자 직접 코딩)
  let handleChange = (event) => {
  //   // 현재 화면 입력값 : event.target.value
  //   // 현재 화면 태그의 이름 : event.target.name
  //   // 속성명에 변수를 넣을때는 [] 를 사용하여야 한다. -> [변수명]
    setDept({...dept, [event.target.name] : event.target.value })
  };

  let saveDept = () => {
    alert("저장되었습니다.")
  };



  return (
    <div className="submit-form">
    <div>
      <div className="form-group">
        <label htmlFor="dname">Dname</label>
        <input
          type="text"
          className="form-control"
          id="dname"
          required
          value={dept.dname}
          onChange={handleChange}
          name="dname"
        />
      </div>

      <div className="form-group">
        <label htmlFor="loc">Loc</label>
        <input
          type="text"
          className="form-control"
          id="loc"
          required
          value={dept.loc}
          onChange={handleChange}
          name="loc"
        />
      </div>
      <br/>
      <button onClick={saveDept} className="btn btn-success">
        Submit
      </button>
    </div>
  </div>
  )
}

export default Add_Dept