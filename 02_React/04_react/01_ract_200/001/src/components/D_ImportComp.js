// todo 리액트 컴포넌트 디자인 적용하기 : css 파일 적용
// rfce
import React from 'react'
// css파일 import <- css를 현재 js에 적용
// todo 프로젝트가 커질수록 디자인 클래스선택자들이 중첩될 수 있음.
// todo 예) A라는 사람이 css : .alpha 디자인함
// todo     B라는 사람도 css : .alpha 로 디자인 하면
// todo     css가 중첩되어 에러 발생
// todo     태그 선택자도 같은 문제로 사용하면 안된다.
// todo 1) 공통 디자인 적용 할 사람이 태그 선택자 등을 자유롭게 코딩
// todo 2) 그외 사람들이 클래스/id 선택자로 디자인 함 
// todo    또한 구분자를 정해 클래스명을 작성한다.  
import "../assets/D_ImportComp.css"
function D_ImportComp() {
  return (
    // 리액트에는 class="" 대신 className=""을 쓴다.
    <div >
        <h2 className='dms01-test'>ImportComp</h2>
    </div>
  )
}

export default D_ImportComp