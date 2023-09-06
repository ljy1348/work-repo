// 사원 상세조회 페이지
import React, { useEffect, useState } from 'react'
import EmpService from '../../services/EmpService';
import { useNavigate, useParams } from 'react-router-dom';
import http from '../../utils/http-common'
function Emp() {
    // 더미데이터(초기화 데이터)
    let initCustomer = {
        id : null,
        cname : "",
        email : "",
        phone : ""
    }
    // 이전 페이지에서 넘어온 값
    let {id} = useParams();
    // 변수 선언
    let [customer, setCustoemer] = useState(initCustomer);
    let [message, setMessage] = useState("");
    let navigate = useNavigate();

    // 데이터 조회(id 기준)
    let getEmp = () => {
        EmpService.get(id)
        .then((response)=>{
            setCustoemer(response.data)
            console.log(response.data)
        })
    }
    // 페이지 시작할 때 데이터 조회 함수 실행
    useEffect(()=>{
        getEmp()
    },[id])

    // input창에 입력 할 때 입력값 바뀔때마다 실행
    let handleInputChange = (event) => {
        let attrName = event.target.name;
        let attrValue = event.target.value;
        setCustoemer({...customer, [attrName]:attrValue})
    }

    // 데이터 삭제 및 이전 페이지로 이동
    const deleteCustomer = () => { 
        http.delete(`/customer/${customer.id}`)
        .then(()=>{
            navigate("/emp")
        }).catch((e)=>{
            console.log(e)
        })
     }
    //  데이터 수정 및 수정 완료시 메세지 출력
    const updateCustomer = () => { 
        http.put(`/customer/${customer.id}`, customer)
           .then(()=>{
            setMessage("수정되었습니다.")
        }).catch((e)=>{
            console.log(e)
        })
     }



  return (
    <>
    {/* 제목 start */}
    <div className="row">
      {/* 제목 시작 */}
      <div className="col-md-6 mb-5 mt-5">
        <h1>Emp Detail</h1>
      </div>
      {/* 제목 끝 */}
    </div>
    {/* 제목 end */}

    <>
      {customer ? (
        <div className="col-6 mx-auto">
          <form>
            <div className="row g-3 align-items-center mb-3">
              <div className="col-3">
                <label htmlFor="cname" className="col-form-label">
                  Cname
                </label>
              </div>

              <div className="col-9">
                <input
                  type="text"
                  id="cname"
                  required
                  className="form-control"
                  value={customer.cname}
                  onChange={handleInputChange}
                  placeholder="cname"
                  name="cname"
                />
              </div>
            </div>

            <div className="row g-3 align-items-center mb-3">
              <div className="col-3">
                <label htmlFor="email" className="col-form-label">
                  email
                </label>
              </div>

              <div className="col-9">
                <input
                  type="text"
                  id="email"
                  required
                  className="form-control"
                  value={customer.email}
                  onChange={handleInputChange}
                  placeholder="email"
                  name="email"
                />
              </div>

              <div className="row g-3 align-items-center mb-3">
                <div className="col-3">
                  <label htmlFor="phone" className="col-form-label">
                    phone
                  </label>
                </div>
                <div className="col-9">
                  <input
                    type="text"
                    id="phone"
                    required
                    className="form-control"
                    value={customer.phone}
                    onChange={handleInputChange}
                    placeholder="phone"
                    name="phone"
                  />
                </div>
              </div>
            </div>
          </form>

          <div className="row g-3 mt-3 mb-3">
            <button
              onClick={deleteCustomer}
              className="btn btn-outline-danger ms-3 col"
            >
              Delete
            </button>

            <button
              type="submit"
              onClick={updateCustomer}
              className="btn btn-outline-success ms-2 col"
            >
              Update
            </button>
          </div>

          <p>{message}</p>
        </div>
      ) : (
        <div className="col-6 mx-auto">
          <br />
          <p>Please click on a Customer...</p>
        </div>
      )}
    </>
  </>
  )
}

export default Emp