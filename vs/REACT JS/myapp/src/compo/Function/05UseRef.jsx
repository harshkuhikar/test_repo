import React from 'react';
import { useRef } from 'react';

function UseRef(props) {
    let myref = useRef(null)
    console.log(myref.current);
    const imputclck=()=>{
        myref.current.focus();
        if(myref.current.value == "")
        {
            alert("Congratulations alert mali gayel chhe have focus kar focus") bj
        }
    }
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <input type="text" ref={myref} />
                        <button className='btn btn-primary' onClick={imputclck}>Click Me</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UseRef;