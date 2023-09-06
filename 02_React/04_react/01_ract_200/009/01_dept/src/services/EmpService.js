import http from '../utils/http-common'

const getAll = () => {
    return http.get("/customer")
}

const getSearch = (cname) => {
    return http.get(`/customer?cname=${cname}`)
}

const create = (data) => { 
    return http.post("/customer", data)
 }

const get = (id) => {
    return http.get(`/customer/${id}`)
}

const EmpService = {
    getAll, getSearch, create, get
}

export default EmpService