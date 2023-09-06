import React, { useState } from 'react'

function Emp() {
  const initialEmps = [
    {
      eno: 1,
      ename: "Scott",
    },
    {
      eno: 2,
      ename: "James",
    },
    {
      eno: 3,
      ename: "Kim",
    },
  ];
  let [emps, setEmps] = useState(initialEmps);


  return (
    <div className='container mt-5 w-75'>
      <h2>Emps</h2>
      <ul className="list-group mt-3">
        {
          emps.map((value, idx)=>{
            return <li className="list-group-item" key = {idx}>{value.ename}</li>
          })
        }

</ul>
    </div>
  )
}

export default Emp