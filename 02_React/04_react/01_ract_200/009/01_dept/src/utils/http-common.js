import axios from "axios";
export default axios.create({
    baseURL: "http://localhost:8000",
    headers: {
        // 통신하는 문서 타입 : json
      "Content-Type": "application/json"
    } 
})