import axios from 'axios';
import React, { useState } from 'react'

export default function AddUser() {
    const [user, setUser] = useState({
        username: "",
        firstname: "",
        lastname: "",
        email: ""
    });

    const{username,firstname,lastname,email}=user;

    const onInputChange=(e)=> {
        // console.log(e.target.value)
        setUser({...user,[e.target.username]:e.target.value});

    };

    const onSubmit = async(e)=> {
        e.preventDefault();
        await axios.post("http://localhost:8080/register", user)

    }

  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-6  offset-md-3 border rounded p-8 mt-2 shadow'>
                <h2 className='text-center m-8'>Register User</h2>

                <form onSubmit={(e) => onSubmit(e)}>
                <div className='mb-3'>
                    <label htmlFor='Name' className='form-label'>
                        Username
                    </label>
                    <input
                    type={"text"}
                    className="form-control"
                    placeholder='Enter your username'
                    name='username'
                    onChange={(e) => onInputChange(e)}
                    />

                </div>
                <div className='mb-3'>
                    <label htmlFor='Name' className='form-label'>
                        First Name
                    </label>
                    <input
                    type={"text"}
                    className="form-control"
                    placeholder='Enter your first name'
                    name='firstname'
                    // value={firstname}
                    onChange={(e) => onInputChange(e)}/>

                </div>
                <div className='mb-3'>
                    <label htmlFor='Name' className='form-label'>
                        Last Name
                    </label>
                    <input
                    type={"text"}
                    className="form-control"
                    placeholder='Enter your last name'
                    name='lastname'
                    // value={lastname}
                    onChange={(e) => onInputChange(e)}/>
                </div>
            
                <div className='mb-3'>
                    <label htmlFor='Email' className='form-label'>
                        E-mail
                    </label>
                    <input
                    type={"text"}
                    className="form-control"
                    placeholder='Enter your e-mail address'
                    name='email'
                    // value={email}
                    onChange={(e)=> onInputChange(e)}
                    />
                </div>
                <button type='submit' className='btn btn-outline-secondary mb-3'>
                    Submit
                </button>
                <button type='submit' className='btn btn-outline-danger mx-3 mb-3' >
                    Cancel
                </button>
                </form>
            </div>
        </div>
    </div>
  );
}
