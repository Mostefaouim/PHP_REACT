import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddUser() {
    const backendurl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'; 
    const navigate = useNavigate();
    const [formdata, setFormadata] = useState({
        name: '',
        email: '',
    });

    const addUser = async (e) => {
        e.preventDefault(); // Prevent form from submitting normally
        try {
            const response = await axios.post(`${backendurl}/api/addUser.php`, {
                name: formdata.name,
                email: formdata.email,
            });
            alert(response.data.message);
            if (response.data.success) {
                navigate('/'); // Redirect to the list of users after adding
            }
        } catch (error) {
            console.error('Error adding user:', error);
        }
    };

    return (
        <>
            <h1>Add User</h1>
            <p>This is the form to add users.</p>
            <form className="container" onSubmit={addUser}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        value={formdata.name}
                        onChange={(e) => setFormadata({ ...formdata, name: e.target.value })}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        value={formdata.email}
                        onChange={(e) => setFormadata({ ...formdata, email: e.target.value })}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    );
}

export default AddUser;
