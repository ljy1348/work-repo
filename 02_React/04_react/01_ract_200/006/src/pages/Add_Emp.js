import React, { useState } from 'react'
// 
function Add_Emp() {
  let initEmp = {
    ename : "",job : "",manager : "",hiredate : "",salary : "",
    commission : "",dno : "",
  }
  let [emp, setEmp] = useState(initEmp);



  let handleChange = (event) => {
    setEmp({...emp, [event.target.name]:event.target.value});
  }

  const saveEmp = () => { 
    alert("저장되었습니다.")
    // console.log(emp);
   }
  return (
    <div className="submit-form">
    <div className="form-group">
      <label htmlFor="ename">Ename</label>
      <input
        type="text"
        className="form-control"
        id="ename"
        required
        value={emp.ename}
        onChange={handleChange}
        name="ename"
      />
    </div>

    <div className="form-group">
      <label htmlFor="job">Job</label>
      <input
        type="text"
        className="form-control"
        id="job"
        required
        value={emp.job}
        onChange={handleChange}
        name="job"
      />
    </div>

    <div className="form-group">
      <label htmlFor="manager">manager</label>
      <input
      // 유효성 체크
        type="number"
        className="form-control"
        id="manager"
        // 유효성 체크 통과 필수
        required
        value={emp.manager}
        onChange={handleChange}
        name="manager"
      />
    </div>

    <div className="form-group">
      <label htmlFor="hiredate">hiredate</label>
      <input
        type="number"
        className="form-control"
        id="hiredate"
        required
        value={emp.hiredate}
        onChange={handleChange}
        name="hiredate"
      />
    </div>

    <div className="form-group">
      <label htmlFor="salary">salary</label>
      <input
        type="number"
        className="form-control"
        id="salary"
        required
        value={emp.salary}
        onChange={handleChange}
        name="salary"
      />
    </div>

    <div className="form-group">
      <label htmlFor="commission">commission</label>
      <input
        type="number"
        className="form-control"
        id="commission"
        required
        value={emp.commission}
        onChange={handleChange}
        name="commission"
      />
    </div>

    <div className="form-group">
      <label htmlFor="dno">dno</label>
      <input
        type="number"
        className="form-control"
        id="dno"
        required
        value={emp.dno}
        onChange={handleChange}
        name="dno"
      />
    </div>

    <button onClick={saveEmp} className="btn btn-success mt-3">
      Submit
    </button>
  </div>
  )
}

export default Add_Emp