// dept 추가 페이지
import React, { useState } from "react";
import http from "../../utils/http-common";
import DeptService from "../../services/DeptService";
function AddDept() {
  let initDept = {
    dname: "",
    loc: "",
    id: null,
  };
  let [dept, setDept] = useState(initDept);
  let [submitted, setSubmitted] = useState(false);

  const handleInputChange = (event) => {
    setDept({ ...dept, [event.target.name]: event.target.value });
  };

  // const saveDept = () => {
  //   try {
  //     http.post("/dept", dept)
  //     setSubmitted(true);
  //     setDept(initDept);
  //   } catch (e) {

  //   }
  //  }
  const saveDept = () => {
    DeptService.create(dept)
      .then((response) => {
        setSubmitted(true);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
    };
    
    const newDept = () => {
      // 변수 초기화
    setDept(initDept);
    setSubmitted(false);
  };

  return (
    <div className="row">
      {/* submitted = true : 저장 버튼을 클릭했다는 의미 */}
      {submitted ? (
        <div className="col-6 mx-auto">
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newDept}>
            Add
          </button>
        </div>
      ) : (
        // <></> : 플래그멘테이션(flagmetation)
        // div 대용으로 쓰면 나중에 부모 페이지와 합쳐졌을대 div생성 억제
        <>
          <div className="row">
            {/* 제목 시작 */}
            <div className="col-md-6 mb-5 mt-5">
              <h1>Add Dept</h1>
            </div>
            {/* 제목 끝 */}
          </div>

          <div className="col-6 mx-auto">
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

            <div className="row g-3 mt-3 mb-3">
              <button
                onClick={saveDept}
                className="btn btn-outline-primary ms-2 col"
              >
                Submit
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default AddDept;
