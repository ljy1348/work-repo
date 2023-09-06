import React,{useEffect,useState} from 'react'
// 연습문제 2)
// 아래 생명주기 함수 2개를 만들어서 출력하세요
// 1) 화면이 뜰때 아래의 결과가 출력됨
// 결과 : mount call
// 2) tmpState2 라는 변수의 값이 변경되면 화면에 출력됨
// 결과 : true -> false 바뀌면 false 출력

function D_Exam2() {
    let [tmpState2, setTmpState2] =useState(true);
    useEffect (()=>{
        console.log("mount call")
    },[])
    useEffect (()=>{
        if (!tmpState2) {
        console.log(tmpState2);
        } else {

        }
    },[tmpState2])
    let handleClick = () => {
        if (tmpState2) {
            setTmpState2(false);
        } else {
            setTmpState2(true);

        }
    }

  return (
    <div>
      <h2>[ THIS IS shouldComponentUpdate FUCNTION ]</h2>
      <button onClick={handleClick}>클릭</button>
    </div>

  )
}

export default D_Exam2