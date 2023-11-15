import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from '../../state/store'
import { Link } from 'react-router-dom';
import { deleteUser } from "../../state/UsersSlice";

export const Home = () => {
  const users = useSelector((state: RootState) => state.users)
  const dispatch = useDispatch()

  const handleDelete = (id: number) => {
    dispatch(deleteUser({ id }))
  }

  return (
    < div className="container" >
      <h2>Crud App with JSON Server</h2>
      <Link to='/create' className="btn btn-success my-3">Create +</Link>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <Link to={`/edit/${user.id}`} className="btn btn-sm btn-primary">Edit</Link>
                <button onClick={() => handleDelete(user.id)} className="btn btn-sm btn-danger ms-2">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div >
  )
};
