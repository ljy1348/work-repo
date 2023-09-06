import React, {useEffect}from 'react'
//todo props:부모데이터 -> 자식컴포넌트로 전달
function B_Props(props) {
    // todaudwnrl
    // useEffect(화살표함수(),[감시할 변수]);
    // prop : 자식 : props.전달받을변수명;
    //        부모 : <컴포넌트명 전달할변수명=값></컴포넌트명>
    useEffect (()=>{
        console.log("props 값 : "+props.prop_value);
    },[])
  return (

    <div>B_Props</div>
  )
}

export default B_Props