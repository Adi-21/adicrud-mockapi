import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Edituser = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [user, setUser] = useState({
        name: "",
        email: "",
        phone_no: "",
        age: ""
    });

    const { name, email, phone_no, age } = user;
    const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    useEffect(() => {
        loadUser();
    }, []);

    const onSubmit = async e => {
        e.preventDefault();
        await axios.put(`https://6381a60e53081dd54985ea33.mockapi.io/crudapp/${id}`, user);
        toast.success("Edited successfully!!",{
            position: "top-center",
            autoClose: 1000,
            theme: "colored"
        });
        setTimeout(() => navigate('/'), 2000);
    }

    const loadUser = async () => {
        const result = await axios.get(`https://6381a60e53081dd54985ea33.mockapi.io/crudapp/${id}`);
        setUser(result.data);
    }

    return (
        <>
            <ToastContainer/>
            <div className="container">
                <h1 className="text-center">Edit A User</h1>
                <form onSubmit={e => onSubmit(e)}>
                    <div className="mb-3">
                        <label for="exampleInputName1" className="form-label">Name</label>
                        <div className="form-floating mb-3">
                            <input type="name" class="form-control" id="floatingInput" aria-describedby="nameHelp"
                                placeholder="name" name="name" value={name} onChange={e => onInputChange(e)} />
                            <label for="floatingInput" className="top">Enter Your Name</label>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email</label>
                        <div className="form-floating mb-3">
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                placeholder="email" name="email" value={email} onChange={e => onInputChange(e)} />
                            <label for="floatingInput" className="top">Enter Your Email</label>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Phone No.</label>
                        <div className="form-floating mb-3">
                            <input type="tel" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                placeholder="email" name="phone_no" value={phone_no} onChange={e => onInputChange(e)} />
                            <label for="floatingInput" className="top">Enter Your Phone No.</label>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Age<span className="clue">(optional)</span></label>
                        <div className="form-floating mb-3">
                            <input type="number" className="form-control" min="10" max="99" id="exampleInputNumber1"
                                aria-describedby="ageHelp" placeholder="age" name="age" value={age} onChange={e => onInputChange(e)} />
                            <label for="floatingInput" className="top">Enter Your Age</label>
                        </div>
                    </div>
                    <button type="submit" id="create" className="btn btn-warning">Update</button>
                </form>
            </div>
        </>
    );
};

export default Edituser;