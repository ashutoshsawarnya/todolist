import React from 'react';
import { useContext, useEffect, useState } from "react"
import axios from "axios"
import { TodoContext } from "../context/TodoProvider"


const Todos = () => {

  const { todos, setTodos, fetchTodos } = useContext(TodoContext)


  const deleteUser = async id => {
    await axios.delete(`http://localhost:3002/todos/${id}`);
    fetchTodos()
  }



  return (
    <div className="container">
      <div className="py-4">

        <table className="table border shadow">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>

              <th scope="col">Title</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {todos && todos.map((user, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{user.title}</td>

                <td>
                  <button onClick={() => deleteUser(user.id)}>
                    Delete
                  </button>

                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Todos;