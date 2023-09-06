import React, { useState } from 'react'
import EmpService from '../../services/EmpService';

function AddEmp() {
  let initCustomer = {
    email : "",
    cname : "",
    phone : ""
  }
  let [customer, setCustomer] = useState(initCustomer);
  let [submitted, setSubmitted] = useState(false);

  const saveCustomer = () => { 
      EmpService.create(customer)
      .then((reData)=>{
        setSubmitted(true);
          console.log(reData.data);
        })
        .catch((e)=>{
          console.log(e)
        })
   }

  const handleInputChange = (event) => {
    setCustomer({...customer, [event.target.name]:event.target.value})
    }

  const newCustomer = () => { 
    setCustomer(initCustomer);
    setSubmitted(false);
   }


  return (
    <div className="row">
    {submitted ? (
      <div className="col-6 mx-auto">
        <h4>You submitted successfully!</h4>
        <button className="btn btn-success" onClick={newCustomer}>
          Add
        </button>
      </div>
    ) : (
      <>
        <div className="row">
          {/* 제목 시작 */}
          <div className="col-md-6 mb-5 mt-5">
            <h1>Add Emp</h1>
          </div>
          {/* 제목 끝 */}
        </div>

        <div className="col-6 mx-auto">
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

          <div className="row g-3 mt-3 mb-3">
            <button
              onClick={saveCustomer}
              className="btn btn-outline-primary ms-2 col"
            >
              Submit
            </button>
          </div>
        </div>
      </>
    )}
  </div>
  )
}

export default AddEmp