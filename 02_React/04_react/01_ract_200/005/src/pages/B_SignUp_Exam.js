import React, { useState } from 'react'
// TODO: 연습문제 ) 변수/함수에 맞추어 코딩하기
// TODO: 변수 초기값은 모두 "" 하세요
// TODO: 추가) 입력양식 부트스트랩 디자인도 추가해보세요.
function B_SignUp_Exam() {
    let [name, setName] = useState(""); //정방향(코드에서 화면으로)
    let [password, setPassword] = useState("");
    let [email, setEmail] = useState("");
    let [phone, setPhone] = useState("");
    let [address, setAddress] = useState("");

    let handleChangeName = (event) => {
        setName(event.target.value); // 역방향(화면에서 코드로)
    }
    let handleChangePassword = (event) => {
        setPassword(event.target.value);
    }
    let handleChangeEmail = (event) => {
        setEmail(event.target.value);
    }
    let handleChangePhone = (event) => {
        setPhone(event.target.value);
    }
    let handleChangeAddress = (event) => {
        setAddress(event.target.value);
    }
    let handleSubmit = (event) => {
        event.preventDefault(); // 기본 기능 막기 함수
        alert(`
        이름 : ${name}, 비밀번호 : ${password}
        이메일 : ${email} 폰번호 : ${phone}
        주소 : ${address}`)
    }

  return (
    <div>
      <form>
        <label>
          이름:
          <input
            className="form-control" 
            type="text"
            value={name}
            name="name"
            onChange={handleChangeName}
          />
        </label>

        <br />
        <label>
          패스워드:
          <input
          className="form-control"
            type="password"
            value={password}
            name="password"
            onChange={handleChangePassword}
          />
        </label>

        <br />
        <label>
          email:
          <input
          className="form-control"
            type="email"
            value={email}
            name="email"
            onChange={handleChangeEmail}
          />
        </label>

        <br />
        <label>
          phone:
          <input
          className="form-control"
            type="text"
            value={phone}
            name="phone"
            onChange={handleChangePhone}
          />
        </label>

        <br />
        <label>
          주소:
          <input
          className="form-control"
            type="text"
            value={address}
            name="address"
            onChange={handleChangeAddress}
          />
        </label>
        <br/>
        <br/>
        <button  className="btn btn-primary"
             type="submit" onClick={handleSubmit}>
          제출
        </button>
      </form>
    </div>
  )
}

export default B_SignUp_Exam