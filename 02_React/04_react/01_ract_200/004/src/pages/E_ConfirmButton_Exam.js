// E_ConfirmButton_Exam.js : 자식(연습)
// rfce
// TODO : 아래 변수에 값이 있다. isFull 이 true 이면
// <p style={{ color: "red" }}>정원이 가득찼습니다.</p>
//   아니면
// <p style={{ color: "blue" }}>입장할 수 있습니다.</p>
//  를 출력하세요.
import React, {useState} from 'react'

function E_ConfirmButton_Exam() {
    // TODO: 변수정의
    let [isFull, setIsFull] = useState(false);

    // TODO: 함수정의 : 클릭 (isFull:false -> true)
    // nfn
    const handleConfirm = () => { 
        // (isFull:false -> true), setter 함수 : setIsFull(변경값)
        setIsFull(true);
     }
  return (
    <div>
        <button onClick={handleConfirm} className='btn btn-warning'>
            {/* 힌트 */}
            {
                (isFull===true)? 
                          <p style={{ color: "red" }}>정원이 가득찼습니다.</p> 
                        : <p style={{ color: "blue" }}>입장할 수 있습니다.</p>
            }
        </button>
    </div>
  )
}

export default E_ConfirmButton_Exam