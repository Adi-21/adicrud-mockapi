import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("https://6381a60e53081dd54985ea33.mockapi.io/crudapp");
    setUser(result.data);
  };

  const deleteUser = async id => {
    await axios.delete(`https://6381a60e53081dd54985ea33.mockapi.io/crudapp/${id}`);
    alert("Sure, you want to delete!!!");
    loadUsers();
  };



  // const searchFun = () =>{
  //   const filter = document.getElementById('myInput').ariaValueMax.toUpperCase();
  //   const myTable = document.getElementById('myTable');
  //   const tr = myTable.getElementByTagName('tr');
  //       for(var i = 0; i < tr.length; i++){
  //         const td = tr[i].getElementByTagName('td')[0];
  //           if(td){
  //             const textvalue = td.textContent || td.innerHTML;
  //                 if(textvalue.toUpperCase().indexOf(filter) > -1 ){ 
  //                     tr[i].style.display = "";
  //                 }
  //                 else{
  //                     tr[i].style.display = "none";
  //                 }
  //           }
  //       }
  // }

  return (
    <>
      <div className="py-2">
        <h1 className="text-center">Home Page</h1>
        {/* <input type="text" name="" id="myInput" placeholder="Search by names...." onKeyUp={searchFun()} /> */}
        <div className="card-body">
        <table className="table table-bordered shadow" id="myTable">
          <thead className="bg-black text-center text-white">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone No.</th>
              <th scope="col">Age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="tbod">
            {users.map((user, index) => (
              <tr>
                <th className="text-center" scope="row">{index + 1}</th>
                <td className="text-center">{user.name}</td>
                <td className="text-center">{user.email}</td>
                <td className="text-center">{user.phone_no}</td>
                <td className="text-center">{user.age}</td>
                <td className="text-center">
                  <Link className="btn btn-info mr-2" to={`/user/${user.id}`}>
                     View
                  </Link>
                  <Link
                    className="btn btn-outline-primary mx-2"
                    to={`/edituser/${user.id}`}
                  >
                    Edit
                  </Link>
                  <Link
                    className="btn btn-danger"
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>
    </>
  );
};

export default Home;