import React, { useState } from 'react'

function E_Object_SignUp_Exam() {
    let initCustomer = {
        name : "",
        password : "",
        email : "",
        phone : "",
        address : ""
    }
    let [customer, setCustomer] = useState(initCustomer);
    let handleChange = (event) => {
        let attrName = event.target.name;
        let attrValue = event.target.value;
        setCustomer({...customer, [attrName]:attrValue});
    }
    let handleSubmit = (event) => {
        event.preventDefault();
        alert(`
        이름 : ${customer.name} 비밀번호 : ${customer.password}
        휴대폰 번호 : ${customer.phone} 이메일 : ${customer.email}
        주소 : ${customer.address}
        `);
    }
  return (
    <div className="container">
      <form>
        {/* 이름 시작 */}
        <label>
          이름:
          <input
            className="form-control"
            type="text"
            value={customer.name}
            name="name"
            onChange={handleChange}
          />
        </label>
        {/* 이름 끝 */}
        {/* 패스워드 시작 */}
        <br />
        <label>
          패스워드:
          <input
            className="form-control"
            type="password"
            value={customer.password}
            name="password"
            onChange={handleChange}
          />
        </label>
        {/* 패스워드 끝 */}
        {/* 이메일 시작 */}
        <br />
        <label>
          email:
          <input
            className="form-control"
            type="email"
            value={customer.email}
            name="email"
            onChange={handleChange}
          />
        </label>
        {/* 이메일 끝 */}
        {/* 폰번호 시작 */}
        <br />
        <label>
          phone:
          <input
            className="form-control"
            type="text"
            value={customer.phone}
            name="phone"
            onChange={handleChange}
          />
        </label>
        {/* 폰번호 끝 */}
        {/* 주소 시작 */}
        <br />
        <label>
          주소:
          <input
            className="form-control"
            type="text"
            value={customer.address}
            name="address"
            onChange={handleChange}
          />
        </label>
        {/* 주소 끝 */}
        {/* 제출 버튼 시작 */}
        <button
          className="btn btn-primary"
          type="submit"
          onClick={handleSubmit}
        >
          제출
        </button>
        {/* 제출 버튼 끝 */}
      </form>
    </div>  )
}

export default E_Object_SignUp_Exam