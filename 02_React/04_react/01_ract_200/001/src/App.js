// 리액트 주소 : http:localhost:3000
// http://(프로토콜)
// localhost(인터넷주소 예) naver.com) -> (개인 pc 인터넷 주소)
// 3000 : prot 번호 (0~90000) -> 인터넷 주소에 포함됨.(80번만은 생략가능)
// App.js - React의 첫 페이지(사이트의 home) => 리액트 서버가 가동되고 처음 실행되는 페이지
// 리액트 페이지(js) : 컴포넌트(==페이지)
// 사용법 :
// function 컴포넌트명() {
//    return {
//      <div>내용</div>
//    }
// }
import logo from './logo.svg';
import './App.css';
// 자식 컴포넌트(페이지) import
import Home from './components/Home.js';
import B_Home2 from './components/B_Home2.js';
import Header from './components/Header';
import Footer from './components/Footer';
import C_Exam from './components/C_Exam';
import D_ImportComp from './components/D_ImportComp';
// App.js <- 부모 컴포넌트 (최상위)
// Home <- 자식 컴포넌트
function App() {
  return (
    <div className="App">
      <div>
        <h1>Start React 200!</h1>
        <p>HTML 적용하기</p>
      </div>
      {/* 주석 : ctrl + / */}
      {/* Home.js 컴포넌트 태그 */}
      <div>
        {/* <Header></Header> */}
        {/* <Home></Home> */}
        {/* <B_Home2></B_Home2> */}
        {/* <C_Exam></C_Exam> */}
        <D_ImportComp></D_ImportComp>
        {/* <Footer></Footer> */}
      </div>
    </div>
  );
}

export default App;
