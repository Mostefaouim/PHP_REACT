import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ListUser() {
    const backendurl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';
    const [users, setUsers] = useState([]);

    const listUsers = async () => {
        try {
            const response = await axios.get(`${backendurl}/api/listUsers.php`);
            setUsers(response.data);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    useEffect(() => {
        listUsers();
    }, []);

    return (
        <>
            <h1>List Users</h1>
            <p>This is the list of users.</p>
            <table className='table'>
                <thead className='thead-dark'>
                    <tr className='table-dark'>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody className='table-light'>
                    {Array.isArray(users) && users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                <Link className='btn btn-primary me-1' to={`/update/${user.id}`}>Edit</Link>
                                <Link className='btn btn-danger' to={`/delete/${user.id}`}>Delete</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Link className='btn btn-success' to={'/add'}>Add User</Link>
        </>
    );
}

export default ListUser;
