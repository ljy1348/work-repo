// dept 조회 페이지
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import http from '../../utils/http-common.js'
import DeptService from "../../services/DeptService";

function DeptList() {
  let [dept, setDept] = useState([]);
  let [deptSearch, setDeptSearch] = useState([]);
  let [searchDname, setSearchDname] = useState("");

  // get 함수는 axios 사용 함수 -> axios함수는 공통으로 쓰이기 때문에
  // services에 넣어 공동으로 사용가능하게 만들자.
  let retrieveDept = () => {
    DeptService.getAll() //백엔드 요청
    // http.get("/dept")
    .then((response)=>{   //성공시 자동 실행
      setDept(response.data);
      setDeptSearch(response.data);
      console.log(response.data);
    }).catch((e)=>{
      console.log(e); //에러 메시지 콘솔로 출력
    })          // 실패시 자동 실행
  }

  useEffect(()=>{
    retrieveDept();
  },[]);

  let onChangeSearchDname = (event) => {
    setSearchDname(event.target.value);
    setDept(deptSearch);
  };

  // let findByDname = () => {
  //   DeptService.findByDname(searchDname) //백엔드 요청
  //   .then((response)=>{   //성공시 자동 실행
  //     setDept(response.data);
  //     console.log(response.data);
  //   }).catch((e)=>{
  //     console.log(e); //에러 메시지 콘솔로 출력
  //   })          // 실패시 자동 실행
  // };

  let findByDname = () => {
    const initDeptSearch = dept.filter((value)=>value.dname.includes(searchDname));
    setDept(initDeptSearch);
  };


  return (
        <div>
      <div className="row">
        {/* 제목 시작 */}
        <div className="col-md-12 mb-5 mt-5">
          <h1>Dept List</h1>
        </div>
        {/* 제목 끝 */}
      </div>

      {/* dname start */}
      <div className="row mb-5 justify-content-center">
        {/* w-50 : 크기 조정, mx-auto : 중앙정렬(margin: 0 auto), justify-content-center */}
        <div className="col-12 w-50 input-group mb-3">
          {/* 검색창 시작 */}
          <input
            type="text"
            className="form-control"
            placeholder="Search by dname"
            value={searchDname}
            onChange={onChangeSearchDname}
            onKeyDown={findByDname}
          />
          {/* 검색창 끝 */}
          {/* 검색 버튼 시작 */}
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={findByDname}
              // onKeyDown={findByDname}
            >
              Search
            </button>
            {/* 검색 버튼 끝 */}
          </div>
        </div>
      </div>
      {/* dname end */}

      {/* table start */}
      <div className="col-md-12">
        {/* table start */}
        <table className="table">
          <thead className="table-light">
            <tr>
              <th scope="col">Dname</th>
              <th scope="col">Loc</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          {/* 반복문 시작 */}
          <tbody>
            {dept &&
              dept.map((data, index) => (
                <tr key={index}>
                  <td>{data.dname}</td>
                  <td>{data.loc}</td>
                  <td>
                    {/* 사용법 : url/변수값 -> 다른 페이지에서 값을 받을 수 있다. (파라메터 방식) */}
                    {/* 2번째 : url?변수명=변수값 (쿼리스트링 방식) */}
                    {/* 클릭하면 상세 페이지가 화면에 뜸(부서 번호도 넘겨줌) */}
                    <Link to={"/dept/" + data.id}>
                      <span className="badge bg-success">Edit</span>
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
          {/* 반복문 끝 */}
        </table>
        {/* table end */}
      </div>
      {/* table end */}
    </div>
  )
}

export default DeptList