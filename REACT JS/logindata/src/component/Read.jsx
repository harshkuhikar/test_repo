import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Read = () => {
    const[apiData,setapiData] = useState([]);

    const getData=()=>{
        axios.get("https://6465e9259c09d77a62f773de.mockapi.io/crud")
        .then((responce)=>{
           setapiData(responce.data);
        })
    }

    const handledelete =(id)=>{
        axios.delete(`https://6465e9259c09d77a62f773de.mockapi.io/crud/${id}`)
        .then(()=>{
            getData();
        })
    }

    const setDataToStorage =(id,name,age,email)=>{
        localStorage.setItem('id',id);
        localStorage.setItem('name',name);
        localStorage.setItem('Age',age);
        localStorage.setItem('Email',email);

    }
   
   useEffect(()=>{
        getData()
    },[])
  return (
    <>
        <div className="row">
            <div className="col-md-12">
                <h2 className='mt-5'>
                    <Link to='/Create'>
                        <button className="btn-primary">Create New Data</button>
                    </Link>
                </h2>
                <table className='table table-bordered table-striped table-dark table-hover mt-3'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NAME</th>
                            <th>AGE</th>
                            <th>E-MAIL</th>
                            <th>EDIT</th>
                            <th>DELETE</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                        apiData.map((item,i)=>{
                            return(
                                <>
                                <tr key={i}>
                                    <td>{item.id}</td>
                                    <td>{item.e_name}</td>
                                    <td>{item.e_Age}</td>
                                    <td>{item.e_Email}</td>
                                    <td>
                                        <Link to= '/edit'>
                                         <button className='btn btn-primary' onClick={()=>setDataToStorage(item.id, item.e_name, item.e_Age, item.e_Email)}>EDIT</button>
                                        </Link>
                                    </td>
                                    <td><button className="btn btn-danger" onClick={()=> {if(window.confirm('Are You Sure Delete Date???')) {handledelete(item.id)}}}>DELETE</button></td>
                                </tr>
                                </>
                            )
                        })
                       }
                    </tbody>
                </table>
            </div>
        </div>
    </>
  )
}

export default Read