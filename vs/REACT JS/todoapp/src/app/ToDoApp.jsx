import React, { useState } from 'react';
import { AddToDo,DeleteToDo } from '../action/index';
import { useDispatch, useSelector } from 'react-redux';

function ToDoApp(props) {
    const [inptdata, setinptdata] = useState('')
    const dispatch = useDispatch();
    const list = useSelector((state) => state.listdata.list)
    console.log(list);
    return (
        <>

            <div className="container mt-5">
                <div className="row">
                    <div className="col">
                        <input type="text" className='form-cantrol' value=
                            {inptdata} onChange={(e) => setinptdata(e.target.value)} />
                            <br />
                            <br />
                        <button className='btn btn-primary' onClick={()=>dispatch(AddToDo(inptdata),setinptdata(''))}>Add tadk</button>
                        <br />
                        {list.map((res)=>{
                            console.log(res);
                            return(
                                
                                <div>
                                    <h1 className='mx-2'>{res.data}</h1>
                                    <button className='btn btn-danger mt-3' onClick={()=>dispatch(DeleteToDo(res.id))}>Delete</button>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

        </>
    );
}

export default ToDoApp;