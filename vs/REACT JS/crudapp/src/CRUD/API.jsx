import axios from "axios";

export async function AxiosRequest(url, method, headers, params) {
    return params ? axios({
        url: url,
        method: method,
        headers: headers,
        data: params
    }) : axios({
        url: url,
        method: method,
        headers: headers,
        data: {}
    })
}

//get data
const GetApiDetails = () => {
    const headers = {
        'content-type': 'application/json'
    }
    return AxiosRequest('http://localhost:3000/details', 'Get', headers, {})
}

//DELETE data
const DeleteApiDetails = (id) => {
    const headers = {
        'content-type': 'application/json'
    }
    return AxiosRequest('http://localhost:3000/details/' + id, 'DELETE', headers, {})
}

//Add data
const PostApiDetails = (data) => {
    return axios.post('http://localhost:3000/details', data)
}



//Edit data
const EditApiDetails = (id) => {
    const headers = {
        'content-type': 'application/json'
    }
    return AxiosRequest('http://localhost:3000/details/' + id, 'GET', headers, {})
}
//Edit data
const UpdateApiDetails = (data,id) => {
    const headers = {
        'content-type': 'application/json'
    }
    return AxiosRequest('http://localhost:3000/details/' + id,
        'PUT', headers, data)
}
export {
    GetApiDetails, DeleteApiDetails, PostApiDetails,
    EditApiDetails, UpdateApiDetails
};
