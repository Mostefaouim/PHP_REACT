import React from 'react';
import axios from 'axios';
import { useNavigate, useParams, Link } from 'react-router-dom';

function DeleteUser() {  
    const backendurl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';
    const navigate = useNavigate();
    const { id } = useParams();

    const deleteUser = async (e) => {
        e.preventDefault();
        try {
            await axios.delete(`${backendurl}/api/deleteUser.php?id=${id}`);
            navigate('/');  
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    return (
        <>
            <h1>Delete User</h1>
            <p>Do you want to delete this user?</p>
            <form className="container">
                <button type="submit" className="btn btn-danger me-3" onClick={deleteUser}>Delete</button>
                <Link className="btn btn-info" to={'/'}>Cancel</Link>
            </form>
        </>
    );
}

export default DeleteUser;
