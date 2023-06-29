import React from 'react';
// import { useState } from 'react';
import { Incdata, Decdata } from '../Action/index'
import { useDispatch, useSelector } from 'react-redux';

function Counter(props) {
    const dispatch = useDispatch()
    const Result = useSelector((state) => state.changeData)
    console.log(Result);
    return (
        <>
            <div className='container mt-5'>
                <div className="row">
                    <div className="col-3 text-center">
                        <button className='bnt btn-primary' onClick={() => dispatch(Decdata())}>Decerement</button>
                        <h1>{Result}</h1>
                        <button className='bnt btn-primary' onClick={() => dispatch(Incdata())}>Incremement</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Counter;