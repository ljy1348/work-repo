import React, { useEffect, useState } from 'react'
import EmpService from '../../services/EmpService';
import { Link } from 'react-router-dom';

function EmpList() {
    let [customer, setCustomer] = useState([]);
    let [customer2, setCustomer2] = useState([]);
    let [searchCname, setSearchCname] = useState("");

    // EmpService.js (모든 데이터 조회 : /customer)
    //               (검색어 조회 : `/customer?cname=${cname}`)

    const getEmp = () => {
        EmpService.getAll()
        .then((getData)=>{
            setCustomer(getData.data);
            setCustomer2(getData.data);
        })
        .catch((e)=>{
            console.log(e);
        })
    }

    useEffect(getEmp,[])

    const onChangeSearchCname = (event) => {
        setSearchCname(event.target.value);
        setCustomer(customer2);
    }

  //     let findByCname = () => {
  //       setCustomer([...customer2]);
  //   // console.log(customer2);
  //   EmpService.getSearch(searchCname) //백엔드 요청
  //   .then((response)=>{   //성공시 자동 실행
  //       setCustomer(response.data);
  //   }).catch((e)=>{
  //     console.log(e); //에러 메시지 콘솔로 출력
  //   })   // 실패시 자동 실행
  // };

  let findByCname = () => {
    const initEmpSearch = customer.filter((value)=>value.cname.includes(searchCname));
    setCustomer(initEmpSearch);
  };

  return (
    <div>
    <div className="row">
      {/* 제목 시작 */}
      <div className="col-md-12 mb-5 mt-5">
        <h1>Emp List</h1>
      </div>
      {/* 제목 끝 */}
    </div>

    {/* cname start */}
    <div className="row mb-5 justify-content-center">
      {/* w-50 : 크기 조정, mx-auto : 중앙정렬(margin: 0 auto), justify-content-center */}
      <div className="col-12 w-50 input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search by cname"
          value={searchCname}
          onChange={onChangeSearchCname}
          onKeyDown={findByCname}
        />
        <div className="input-group-append">
          <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={findByCname}
          >
            Search
          </button>
        </div>
      </div>
    </div>
    {/* cname end */}

    {/* table start */}
    <div className="col-md-12">
      {/* table start */}
      <table className="table">
        <thead className="table-light">
          <tr>
            <th scope="col">Cname</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {customer &&
            customer.map((data, index) => (
              <tr key={index}>
                <td>{data.cname}</td>
                <td>{data.email}</td>
                <td>{data.phone}</td>
                <td>
                  <Link to={"/emp/" + data.id}>
                    <span className="badge bg-success">Edit</span>
                  </Link>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      {/* table end */}
    </div>
    {/* table end */}
  </div>
  )
}

export default EmpList