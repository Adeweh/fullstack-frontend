import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export default function Home() {
    const [users, setUsers] = useState([]);

    const {id}=useParams();

    useEffect(() =>{
        loadUsers();

    },[]);

    const loadUsers =  async () => {
        const result = await axios.get("http://localhost:8080/view");
        setUsers(result.data);
    };

    const deleteUser=async (id)=>{
      const result=await axios.get(`http://localhost:8080/register/${id}`)
      loadUsers();
  }

  return (
    <div className='container'>
        <div className='py-3'>
        <table class="table border shadow">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Username</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Email</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {
        users.map((user,index) => (
            <tr>
      <th scope="row" key={index}>{index + 1}</th>
      <td>{user.username}</td>
      <td>{user.firstname}</td>
      <td>{user.lastname}</td>
      <td>{user.email}</td>
      <td>
        <button className='btn btn secondary mx-2' to={`/edituser/${user.id}`}>View</button>
        <Link className='btn btn-outline-primary mx-4'
        to={`/edituser/${user.id}`}>Edit</Link>
        <button className='btn btn-danger mx-4'
        onClick={()=> deleteUser(user.id)}
        >Delete</button>
      </td>
    </tr>

         ))
    }
    

  </tbody>
</table>

        </div>
      
    </div>
  )
}
