import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Edit = () => {

    const [id, setId] = useState(0);
    const [name, setname] = useState(" ");
    const [age, setage] = useState(" ");
    const [email, setemail] = useState(" ");

    const navigate = useNavigate('/')

    useEffect(() => {
        setId(localStorage.getItem('id'));
        setname(localStorage.getItem('name'));
        setage(localStorage.getItem('Age'));
        setemail(localStorage.getItem('Email'));

    }, [])
    const handleUpdate = (e) => {
        e.preventDefault();
        axios.put(`https://6465e9259c09d77a62f773de.mockapi.io/crud/${id}`, {
            e_name: name,
            e_Age: age,
            e_Email: email
        }).then(() => {
            navigate('/');
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

                            <h1 >Update Data</h1>
                        </div>
                        <form action="" onSubmit={handleUpdate}>
                            <div className="form-group">
                                <label htmlFor="">Enter Name:</label>
                                <input type="text" value={name} onChange={(e) => setname(e.target.value)} placeholder='name' className='form-control' />
                            </div>

                            <div className="form-group">
                                <label htmlFor="">Enter Age:</label>
                                <input type="number" value={age} onChange={(e) => setage(e.target.value)} placeholder='Age' className='form-control' />
                            </div>

                            <div className="form-group">
                                <label htmlFor="">Enter Email:</label>
                                <input type="email" value={email} onChange={(e) => setemail(e.target.value)} placeholder='Email' className='form-control' />
                            </div>
                            <div className="d-grid">
                                <input type="submit" value="Update" className='btn btn-primary mt-3' />
                            </div>
                        </form>


                    </div>
                </div>
            </div>

        </>
    )
}

export default Edit