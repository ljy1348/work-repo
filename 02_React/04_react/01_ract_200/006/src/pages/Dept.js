import React, { useState } from "react";

function Dept() {
  const initailDept = [
    {
      no: "1",
      dname: "Sales",
    },
    {
      no: "2",
      dname: "Marketing",
    },
    {
      no: "3",
      dname: "Research",
    },
  ];
  // 바인딩 변수
  let [dept, setDept] = useState(initailDept);

  return (
    <div className="container mt-5 w-50">
      {/* map() 함수 사용해서 반복문 실행 : ul(부트스트랩) */}
      <h4>Dept List</h4>
      <ul className="list-group mt-3">
        {dept.map((value,idx) => {
          return <li className="list-group-item" key={idx}>{value.dname}</li>;
        })}
      </ul>
    </div>
  );
}

export default Dept;
