// 백엔드 기본 url 주소 설정
// 가짜 백엔드(json-server) : http://localHost:8000
// 자원(리소스) : url : /dept
// 사용예) http://localHost:8000/dept
// 이 파일에서는 기본주소만 설정하고
// 다른 파일에서 추가 url 설정

// 1) 통신 라이브러리 추가
import axios from "axios";

// 2) 기본 주소 설정 : 가짜 백엔드(http://localHost:8000)
export default axios.create({
    baseURL: "http://localhost:8000",
    headers: {
        // 통신하는 문서 타입 : json
      "Content-Type": "application/json"
    } 
})

