import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home.js';
import AddDept from './pages/dept/AddDept';
import DeptList from './pages/dept/DeptList';
import NotFound from './components/NotFound';
import EmpList from './pages/emp/EmpList';
import AddEmp from './pages/emp/AddEmp';
import Dept from './pages/dept/Dept';
import Emp from './pages/emp/Emp';

function App() {
  return (
    <div className="App">
{/* 메뉴 컴포넌트 */}
    <Header/>
{/* 본문 : 라우팅 설정 */}
    <div className="contains mt-3">
    <Routes>
      {/* path="/" <- 첫 페이지 */}
      <Route path="/" element={<Home/>}/>
      <Route path="/dept" element={<DeptList/>}/>
      <Route path="/dept/:id" element={<Dept/>}/>
      <Route path="/add-dept" element={<AddDept/>}/>
      <Route path="/emp" element={<EmpList/>}/>
      <Route path="/add-emp" element={<AddEmp/>}/>
      <Route path="/emp/:id" element={<Emp/>}/>
      <Route path="*" element={<NotFound/>}/>
      
    </Routes>
    </div>
{/* 꼬릿말 */}
    </div>
  );
}

export default App;
