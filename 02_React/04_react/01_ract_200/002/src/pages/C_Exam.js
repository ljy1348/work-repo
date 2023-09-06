import React, {useEffect} from 'react'
// 데이터 전달받아 아래와 같이 콘솔에 출력된다.
// 결과 : "From App"
//        "useEffect"
function C_Exam(props) {

    useEffect(()=>{
        console.log(props.prop_value+"\n"+"useEffect")
    },[])

  return (
    <div>
    C_Exam    
    </div>
  )
}

export default C_Exam