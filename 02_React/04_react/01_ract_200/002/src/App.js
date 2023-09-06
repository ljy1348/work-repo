// 처음 리액트 생성할 때 이미지
// import logo from './logo.svg';
// 기본 적용되는 css (중앙정렬)
// 빼도 상관 없음. 디자인 할려면 주석 처리 해도 상관 없음
import './App.css';
import A_Lifecycle from './pages/A_Lifecycle';
import B_Props from './pages/B_Props';
import C_Exam from './pages/C_Exam';
import D_Exam2 from './pages/D_Exam2';
import E_Exam3 from './pages/E_Exam3';
import F_Clock from './pages/F_Clock';
// todo 리액트에서 처음으로 실행되는 js(최상위 부모 컴포넌트)
// todo 웹브라우저 확인(주소창) : http://localhost:3000
function App() {
  // 변수나 함수를 정의하는 공간


  // 화면에 구현되는 공간
  return (
    <div className="App">
      <h1>Start React 200!</h1>
      {/* <A_Lifecycle></A_Lifecycle> */}
      {/* <B_Props prop_value="a"></B_Props> */}
      {/* <C_Exam prop_value="From App" /> */}
      {/* <D_Exam2></D_Exam2> */}
      <E_Exam3 name="처음 만난 파이썬"
        numOfPage={300}></E_Exam3>
        <E_Exam3 name="처음 만난 자바"
        numOfPage={500}></E_Exam3>
        {/* <F_Clock ></F_Clock> */}
    </div>
  );
}

export default App;
