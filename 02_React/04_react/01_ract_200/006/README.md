# 리액트 메뉴추가 : 부트스트랩 사이트 네비게이션 바 예제 이용

# 리액트 라이브러리 추가
npm install 라이브러리이름

# 리액트 메뉴 라이브러리
npm install react-router-dom

# 사용법 
index.js 에 들어가서
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <App />
  </BrowserRouter>
);

<App/>을 <BrowserRouter> 로 감싸주고 import 해 준다.

# App.js : 1) 새로운 태그 import
import {Routes,Route} from "react-router-dom"
# <Routes><Route/></Routes>
# url과 컴포넌트가 연결되어 사용 가능합 : 라우팅

# 1) <a href="url">메뉴</a> 사용 (단점 : 성능 안좋음, 전체 새로고침)
# 2) <link to="url">메뉴</link> (성능 좋음, 부분 화면 처리)
