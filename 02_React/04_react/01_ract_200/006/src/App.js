import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
// 메뉴 라이브러리 추가
import {Routes, Route, Link} from "react-router-dom";
import Dept from './pages/Dept';
import Add_Dept from './pages/Add_Dept';
import Emp from './pages/Emp';
import Add_Emp from './pages/Add_Emp';
function App() {
  return (
    <div className="App">
      {/* 메뉴 */}

      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/dept">Dept</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/add-dept">Add Dept</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/emp">Emp</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/add-emp">Add Emp</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
      {/* 본문 */}
      {/* 컴포넌트와 메뉴 연결 : 라우터 */}
      <Routes>
        {/* 첫화면 url => {<컴포넌트명/>} -> 컴포넌트명을 첫 화면에 띄워라 */}
        <Route path="/" element={<Home/>}/>
        {/* /dept 에 들어오면 dept 컴포넌트를 화면에 띄워라 */}
        <Route path="/dept" element={<Dept/>}/>
        <Route path="/add-dept" element={<Add_Dept/>}/>
        <Route path="/emp" element={<Emp/>}/>
        <Route path="/add-emp" element={<Add_Emp/>}/>
      </Routes>
    </div>
  );
}

export default App;
