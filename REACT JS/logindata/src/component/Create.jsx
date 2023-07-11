import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Create = () => {

    const[name,setname]= useState("");
    const[Age,setAge]= useState("");
    const[Email,setEmail]= useState("");

    const navigate = useNavigate();


    const handleSubmit = (e)=>{
        e.preventDefault();
        
        axios.post('https://6465e9259c09d77a62f773de.mockapi.io/crud',{
            e_name:name,
            e_Age:Age,
            e_Email:Email
        }).then(()=>{
            navigate('/')
        })
    }
   
  return (
    <>
    <div className="container">

        <div className="row">
            <div className="col-md-4">
            <h2 className='mt-5'>
                    <Link to='/'>
                        <button className="btn-primary"> Read Data</button>
                    </Link>
                </h2>
                <div className='bg-primary p-4 text-center my-4'>
                
                    <h1 >Create Data</h1>
                </div>
                <form action="" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="">Enter Name:</label>
                        <input type="text" placeholder='name' className='form-control' onChange={(e)=>setname(e.target.value)} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="">Enter Age:</label>
                        <input type="number" placeholder='Age' className='form-control'  onChange={(e)=>setAge(e.target.value)}/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="">Enter Email:</label>
                        <input type="email" placeholder='Email' className='form-control' onChange={(e)=>setEmail(e.target.value)}/>
                    </div>
                    <div className="d-grid">
                        <input type="submit" value="submit"  className='btn btn-primary mt-3'/>       
                    </div>
                </form>

                {name}
                <br/>
                {Age}
                <br/>
                {Email}

            </div>
        </div>
        </div>
     
    </>
  )
}

export default Create