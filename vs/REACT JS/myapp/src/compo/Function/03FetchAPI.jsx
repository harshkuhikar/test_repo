import React, { useEffect } from 'react';

function FetchAPI(props) {
    const[data,setdata]=usestate({})
    const[status,setstatus]=usestate('Pending...')

    useEffect(()=>{
        setTimeout(() => {
            Fetch('https://jsonplaceholder.typicode.com/comments?postId=1')
            .then((res)=>res.json())
            .then((Response)=>{
                console.log(Response);
                setstatus('Completed')
                setdata(Response)
            }).catch((Error)=>{
                console.log(Error);
            })
        }, 2000);
    })

    
    
    return (
        <div>
            <div className='container'>
                <div className="row">
                    <div className="col">
                        <h1>{status}</h1>
                        <div>{status=="Completed"?JSON.stringify(data):"No Data Found"}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FetchAPI;