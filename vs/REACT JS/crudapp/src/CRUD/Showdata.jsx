import React from 'react';
import { GetApiAction, DeleteApiAction } from '../Action/index';
import { useSelector, useDispatch } from 'react-redux/';
import { useEffect } from 'react';
import {
    Link
} from "react-router-dom";


function Showdata(props) {
    const dispatch = useDispatch();
    const Result = useSelector((state) => state.reducer.details)
    const isDelete = useSelector((state) => state.reducer.isDelete)
    console.log(isDelete);

    useEffect(() => {
        dispatch(GetApiAction())
    }, dispatch)
    console.log(Result);

    if (isDelete) {
        window.location.reload(false);
    }
    return (
        <>

            <div className="container mt-5">
                <div className="row">
                    <h1 className='text-danger text-center'>Welcome to redux CRUD App</h1>
                    <div className="col">
                        <table className='table mt-5 text-center'>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Country</th>
                            <th>Action</th>

                            <tbody>
                                {Result.map((res) => {
                                    console.log(res);
                                    return (
                                        <tr>
                                            <td>{res.id}</td>
                                            <td>{res.name}</td>
                                            <td>{res.email}</td>
                                            <td>{res.phone}</td>
                                            <td>{res.country}</td>
                                            <td><button className='btn btn-danger' onClick={() =>
                                                dispatch(DeleteApiAction(res.id))}>Delete</button>
                                            /
                                            <Link to={`/update/${res.id}`} className='btn btn-success'>Update</Link>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Showdata;