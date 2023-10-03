import React, { useState, useEffect } from 'react';

import { toast } from 'react-toastify';
import { Token } from '../../../GloballyFunctions';

const AdminUserTable = ({ heading, para, col1, col2, col3 }) => {

  const [users, setUsers] = useState([]);
  const [role, setRole] = useState();

  //Call the api to fetch all users exist in our database
  const fetchAllUsers = async () => {
    try {
      const res = await fetch(`${process.env.REACT_APP_API}admin/fetch`, {
        headers: {
          'auth-token': Token
        }
      });
      const data = await res.json();

      setUsers(data.users);

    } catch (error) {
      // console.log(error);
    }
  }

  useEffect(() => {
    fetchAllUsers(); //fetching all the users by the admin
  }, [])


  //------ Function to handle the role of the users
  const handleRoleChange = async (e, id) => {

    //Change the user role at state
    const data = users.map((item) => item._id === id ? ({ ...item, role: e.target.value }) : (item));

    setUsers(data);

    //Call the api to update the role of the users
    try {
      const res = await fetch(`${process.env.REACT_APP_API}admin/updateRole/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': Token
        },
        body: JSON.stringify({ role: e.target.value })
      });
      const data = await res.json();

      if (data.success === true)
        toast.success(data.msg);
      else if (data.success === false)
        toast.error(data.msg);

    } catch (error) {
      // console.log(error);
      toast.error(error);
    }

  }

  //---------------- Function to delete the users details
  const handleDeleteUser = async (id) => {

    let data = users?.filter((item) => item._id != id);

    setUsers(data);

    try {
      const res = await fetch(`${process.env.REACT_APP_API}admin/deleteUser/${id}`, {
        method: 'DELETE',
        headers: {
          'auth-token': Token
        }
      })
      const data = await res.json();

      if (data.success === true)
        toast.success(data.msg);

      else if (data.success === false)
        toast.error(data.msg);

    } catch (error) {
      // console.log(error);
      toast.error(error);
    }
  }
  return (
    <>
      {/* section of model when user click on the edit button  */}

      <div className="container mx-auto p-4">
        <h1 className="text-3xl capitalize font-semibold mb-4">{heading}</h1>
        <p className="text-md font-bold mb-2">{para} </p>
        <div className="bg-white shadow-md rounded-md overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 tracking-wider">
                  {col1}
                </th>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 tracking-wider">
                  {col2}
                </th>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 tracking-wider">
                  {col3}
                </th>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {
                users && users?.map((item) => (
                  <tr key={item._id}>
                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                      {item.name}
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                      {item.email}
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                      {item.role}
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 border-b border-gray-300">
                      {/* <button className="text-indigo-600 hover:text-indigo-900">Edit</button> */}
                      <button onClick={() => handleDeleteUser(item._id)} className=" ml-2 w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600">Delete</button>
                      <select
                        id="role"
                        name="role"
                        value={role}
                        // placeholder={item.role}
                        onChange={(e) => handleRoleChange(e, item._id)}
                        className="w-full px-4 my-2 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                        required
                      >
                        <option name="role" value="user">User</option>
                        <option name="role" value="sponser">Sponser</option>
                        <option name="role" value="admin">Admin</option>
                      </select>
                    </td>
                  </tr>
                ))

              }
            </tbody>

            <tbody>
              
            </tbody>
          </table>
        </div>
      </div>

    </>
  );
};

export default AdminUserTable;
