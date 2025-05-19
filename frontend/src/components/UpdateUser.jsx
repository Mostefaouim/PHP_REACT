import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams, Link } from 'react-router-dom';

function UpdateUser() {
    const backendurl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';
    const navigate = useNavigate();
    const { id } = useParams();

    const [formdata, setFormadata] = useState({
        name: '',
        email: '',
    });
    useEffect(() => {
        const getUserData = async () => {
            try {
                const response = await axios.get(`${backendurl}/api/getUserData.php?id=${id}`);
                setFormadata({
                    name: response.data.name,
                    email: response.data.email,
                });
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };
        getUserData();
    }, [id]);

    const updateUser = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/api/updateUser.php', {
                id,
                ...formdata
            });
            alert(response.data.message);
            if (response.data.success) {
                navigate('/'); // Redirect to the list of users after updating
            }
        } catch (error) {
            console.error('Error updating user:', error);
        }
    };

    return (
        <>
            <h1>Update User</h1>
            <p>This is the form to update user information.</p>
            <form className="container" onSubmit={updateUser}>
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
                <button type="submit" className="btn btn-primary">Update</button>
                <Link className="btn btn-secondary ms-2" to="/">Cancel</Link>
            </form>
        </>
    );
}

export default UpdateUser;
