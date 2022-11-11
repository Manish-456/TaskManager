import { useContext, useState, createContext, useEffect } from "react";

const taskContext = createContext();

export const TaskContextProvider = ({ children }) => {
  const [state, setState] = useState([]);
  const host = "http://localhost:5000";

  const getTasks = async () => {
    try {
      const response = await fetch(`${host}/api/v1/tasks`, {
        method: "GET",

        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();

      setState(data.task);
    } catch (err) {
      console.log(err.message);
    }
  };

  const addTask = async (name) => {
    try {
      const response = await fetch(`${host}/api/v1/tasks`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name }),
      });
      const data = await response.json();
      setState(state.concat(data.task));
    } catch (err) {
      console.log(err);
    }
  };

  //  deleteContext

  const deleteTask = async (id) => {
    const response = await fetch(`${host}/api/v1/tasks/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });

    const filteredData = state.filter((task) => {
      return task._id !== id;
    });
    setState(filteredData);
  };

  const updateTasks = async (editedTask) => {
    const response = await fetch(`${host}/api/v1/tasks/${editedTask._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editedTask),
    });
    
  };

  return (
    <taskContext.Provider
      value={{ state, updateTasks, deleteTask, getTasks, addTask }}
    >
      {children}
    </taskContext.Provider>
  );
};

export const useTaskContext = () => {
  return useContext(taskContext);
};
