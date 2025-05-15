import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Contact() {
  const [users, setUsers] = useState([]);

  // Fetch users from API
  const getUsers = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      setUsers(response.data);
      console.log(response?.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  // Runs once after component mounts
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className='container py-4'>
      <h1 className='text-center mb-4'>Contact</h1>
      <p className='text-center mb-4'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti ullam accusamus et?
      </p>

      <div className="table-responsive">
        <table className="table table-bordered table-hover">
          <thead className="table-danger p-5">
            <tr>
              <th>id</th>
              <th>name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
