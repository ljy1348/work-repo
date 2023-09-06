import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
        {/* 부트 스트랩 메뉴 */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Simple DMS</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    {/* 메뉴 등록 부분 시작 */}
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        {/* dept 메뉴 시작 */}
        <li className="nav-item dropdown">
            {/* 대메뉴 시작 */}
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dept
          </a>
          {/* 대메뉴 끝 */}
          {/* 소메뉴 시작 */}
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to="/dept">Dept</Link></li>
            <li><Link className="dropdown-item" to="/add-dept">Add Dept</Link></li>
        </ul>
        {/* 소메뉴 끝 */}
        </li>
        {/* dept 메뉴 끝 */}
        {/* Emp 메뉴 시작 */}
        <li className="nav-item dropdown">
            {/* 대메뉴 시작 */}
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Emp
          </a>
          {/* 대메뉴 끝 */}
          {/* 소메뉴 시작 */}
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to="/emp">Emp</Link></li>
            <li><Link className="dropdown-item" to="/add-emp">Add Emp</Link></li>
        </ul>
        {/* 소메뉴 끝 */}
        </li>
        {/* Emp 메뉴 끝 */}
      </ul>
    </div>
    {/* 메뉴 등록 부분 끝 */}
  </div>
</nav>
    </div>
  )
}

export default Header