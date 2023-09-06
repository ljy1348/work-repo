import http from '../utils/http-common';

// 공통 조회 함수
// 모든 데이터 조회 함수 : /dept
const getAll = () => { 
    return http.get("/dept")
 }



// 검색어 조회 함수 : /dept?dname=검색어
// 인터넷 주소 : http://url:포트번호/추가url
// 추가url?변수명=값 <- 웹브라우저 주소창에서 다른 페이지 이동시 변수에 값을 저장해서 전달할 수 있음
// 1번 페이지 : /dept , 2번 페이지 : /dept-detail

// 1번 페이지 : /dept , 2번 페이지 : /dept-detail?변수=값
// 변수에 값이 저장된 상태로 2번 페이지 실행됨

const findByDname = (dname) => { 
    return http.get(`/dept?dname=${dname}`);
 }

 const create = (dept) => {
   return http.post("/dept",dept)
 }

 const DeptService = {
    getAll,             // 모든데이터 조회
    findByDname,
    create      // 검색어 조회
 }
 export default DeptService; // 함수 내보내기