import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';


const User = () => {

    const [user, setUser] = useState({
        name: "",
        email: "",
        phone_no: "",
        age: ""
    });

    const { id } = useParams();

    useEffect(() => {
        loadUser();
    }, []);

    const loadUser = async () => {
        const result = await axios.get(`https://6381a60e53081dd54985ea33.mockapi.io/crudapp/${id}`);
        setUser(result.data);
    }

    return (
        <div className="container">
            <Link className="btn btn-primary" to="/">Back To Home</Link>
            <h1 className="dispaly-4">User Id: {id}</h1>
            <hr />
            <ul className="list-group w-50">
                <li className="list-group-item">name: {user.name}</li>
                <li className="list-group-item">email: {user.email}</li>
                <li className="list-group-item">phone_no: {user.phone_no}</li>
                <li className="list-group-item">age: {user.age}</li>
            </ul>
        </div>
    );
};

export default User;