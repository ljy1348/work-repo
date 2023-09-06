// 상세 페이지
// 수정, 삭제
// 상세 페이지에는 이전 페이지에서 변수의 값을 전송
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import DeptService from '../../services/DeptService';
import http from "../../utils/http-common"

function Dept() {
    // 이전 페이지에서 변수의 값을 전송한것을 받는 방법
    // const {변수명} = useParams(); 
    const {id} = useParams();
    let navigate = useNavigate("/dept"); // 페이지 강제 이동시키는 함수

    let initDept = {
        id : null,
        dname:"",
        loc : ""
    
    }
    let [dept, setDept] = useState(initDept); // 백엔드로 전송할 변수(insert 요청)
    let [message, setMessage] = useState(""); // 수정 버튼 클릭 후 성공여부 메세지

    let getDept = () => {
        http.get(`/dept/${id}`)
        .then((response)=>{
            setDept(response.data)
            console.log(response.data)
        }).catch((e)=>{
            console.log(e)
        })
      }
   useEffect(()=>{
    getDept();
   },[id])

    const handleInputChange = (event) => {
        setDept({...dept, [event.target.name] : event.target.value});
        console.log(dept)
    }

    const deleteDept = () => { 
        http.delete(`/dept/${id}`)
        .then(()=>{
          navigate("/dept")
        })
        .catch(()=>{})

     }
    const updateDept = () => { 
        http.put(`/dept/${id}`, dept)
        .then(()=>{
          setMessage("수정하였습니다.")
        })
        .catch(()=>{})
     }

    


    useEffect(()=>{
    })

  return (
    <>
    {/* 제목 start */}
    <div className="row">
      {/* 제목 시작 */}
      <div className="col-md-6 mb-5 mt-5">
        <h1>Dept Detail</h1>
      </div>
      {/* 제목 끝 */}
    </div>
    {/* 제목 end */}

    <>
      {dept ? (
        // 상세 화면 시작
        <div className="col-6 mx-auto">
          <form>
            {/* 부서 명 시작 */}
            <div className="row g-3 align-items-center mb-3">
              <div className="col-3">
                <label htmlFor="dname" className="col-form-label">
                  Dname
                </label>
              </div>

              <div className="col-9">
                <input
                  type="text"
                  id="dname"
                  required
                  className="form-control"
                  value={dept.dname}
                  onChange={handleInputChange}
                  placeholder="dname"
                  name="dname"
                />
              </div>
            </div>
            {/* 부서 위치 시작 */}
            <div className="row g-3 align-items-center mb-3">
              <div className="col-3">
                <label htmlFor="loc" className="col-form-label">
                  Loc
                </label>
              </div>

              <div className="col-9">
                <input
                  type="text"
                  id="loc"
                  required
                  className="form-control"
                  value={dept.loc}
                  onChange={handleInputChange}
                  placeholder="loc"
                  name="loc"
                />
              </div>
            </div>
          </form>
        {/* 버튼 시작 */}
          <div className="row g-3 mt-3 mb-3">
            {/* <Link to= "/dept"> */}
            <button
              onClick={deleteDept}
              className="btn btn-outline-danger ms-3 col"
            >

              Delete
            </button>
            {/* </Link> */}
            <button
              type="submit"
              onClick={updateDept}
              className="btn btn-outline-success ms-2 col"
            >
              Update
            </button>
          </div>
        {/* 버튼 끝 */}

        {/* 수정 버튼을 클릭해서 성공하면 성공 메시지  */}
          <p>{message}</p>
        </div>
        // 상세 화면 끝
      ) : (
        // 에러시 보여줄 화면
        <div className="col-6 mx-auto">
          <br />
          <p>Please click on a Dept...</p>
        </div>
        // 에러시 보여줄 화면 끝
      )}
    </>
  </>
  )
}

export default Dept