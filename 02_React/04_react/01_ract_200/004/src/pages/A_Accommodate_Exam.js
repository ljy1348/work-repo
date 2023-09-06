import React from 'react'
import { useState } from 'react';

function A_Accommodate_Exam() {

    let [isTrue, setIsTrue] = useState(false);

    let yellowClick = () => {
        if (isTrue == false) setIsTrue(true);
        if (isTrue == true) setIsTrue(false);
    }

  return (
    <div>
              <button onClick={yellowClick} className="btn btn-warning">
        노란 버튼
      </button>
      <br/>
      {
        isTrue && 
        <button className="btn btn-primary">
            파란 버튼
        </button>
      }
    </div>
  )
}

export default A_Accommodate_Exam