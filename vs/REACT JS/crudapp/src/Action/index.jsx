import { useEffect, useState } from 'react';
import { GetApiDetails, DeleteApiDetails, PostApiDetails, EditApiDetails ,UpdateApiDetails} from '../CRUD/API'

export const GetApiAction = () => {
    return function (dispatch) {
        return GetApiDetails().then((res) => {
            console.log(res);
            dispatch({
                type: 'GET_DETAILS',
                payload: res.data
            })
        })
    }
}

export const DeleteApiAction = (id) => {
    return function (dispatch) {
        return DeleteApiDetails(id).then((res) => {
            console.log(res);
            dispatch({
                type: 'DELETE_DETAILS',
                payload: true
            })
        })
    }
}

//Add data 
export const PostApiAction = (request) => {
    return function (dispatch) {
        return PostApiDetails(request).then((res) => {
            console.log(res, "response from post data");
            dispatch({
                type: 'POST_DETAILS',
                payload: res.data
            })
        })
    }
}

//Edit data

export default (props) => {
    const [detailsbyid, setdetailsbyid] = useState({})
    const GetDetailsID = (requestid) => {
        console.log("edit data", requestid);
        return EditApiDetails(requestid).then((res) => {
            console.log(res);
            setdetailsbyid(res)
        })
    }
    useEffect(() => {
        GetDetailsID(props)
    }, [])
    return [detailsbyid]
}

//Update data 
export const UpdateApiAction = (request, id) => {
    return function (dispatch){
        dispatch({
            type: 'UPDATE_DETAILS',
            payload: false
        })
    
    
        return UpdateApiDetails(request, id).then((res) => {
            console.log(res, "response from Update data");
            dispatch({
                type: 'UPDATE_DETAILS',
                payload: true
            })
        })
    }


}

