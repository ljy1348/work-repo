import React, { useEffect, useState } from "react";
// 통신 라이브러리 설정 파일 : http-common.js
import http from "../http-common.js";

function Home() {
  // 변수 정의
  let [dept, setDept] = useState([]); // 백엔드 전송받을 객체 배열을 담을 변수
  // 함수 정의
  // axios 함수를 이용해서 백엔드 데이터를 받아오기
  // 기본주소 : http://localhost:8000, 추가 url : /dept
  // 백엔드와의 통신 : 비동기 통신(순차적이 아니라 언제 보내줄지 모름)
  // 따라서 promise(.then().catch())를 써야 하나 axios는 기본으로 사용된다.
  const retrievContent = () => {
    // get : 백엔드 데이터 받아오기 함수
    // get(추가 url)
    http
      .get("/dept")
      // then : 데이터 받아왔을때, catch : 데이터 받아오기 실패했을때
      .then((response) => {
        setDept(response.data);
        console.log(response.data);
      })
      .catch();
  };
  // 화면이 뜰때 retrievContent 함수 실행
  useEffect(retrievContent, []);

  return (
    <div name="container">
      {/* <button onClick={retrievContent}>변경</button> */}
      <h2 className="mt-3">AXIOS 테스트</h2>
      <ul className="list-group">
        {dept.map((value) => (
          <li className="list-group-item" key={value.id}>
            {value.dname}, {value.loc}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
