import { ClassRounded } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { useTaskContext } from "../context/taskContext";
import "../static/Main.css";

import TaskList from "./TaskList";
const Main = () => {
  const task = {
    name: "",
  };
  const [val, setVal] = useState(task);
  const [msg, setMsg] = useState(null)

  const {state, getTasks, addTask } = useTaskContext();
 const showAlert =(messages, color)=>{
   setMsg({
     message : messages,
     color : color
   })

 }
  const changeHandler = (e) => {
    setVal({
      [e.target.name]: e.target.value,
    });
  }; 
  

  const addTaksList = (e) => {
  e.preventDefault()
  
  if(val.name === ""){
    showAlert(
      "Cannot left the field empty",
       "red")
  }else{
    showAlert("Tasks added successfully",
     "green")

  }
    addTask(val.name);
    setVal({
      name : ""
    })
  }
  


 setTimeout(() => {
  showAlert(null)
 }, 3000)
  useEffect(() => {
    getTasks();
   
  }, []);
  const renderTaskList = state.map((task) => {
  return  <TaskList key={task._id} tasks={task}/>
    })


  return (
    <div>
      <div className="container">
        <div className="inner">
          <div className="inputBox">
            <h5 className="h3">Add Task</h5>
            <input
              type="text"
              value={val.name}
              onChange={changeHandler}
              pattern = "[a-z]*"
              className="input"
              name="name"
              id="name"
              placeholder="Write Something.."
            />
            <br />
            <button type="button"  onClick={addTaksList} className="btn">
              Add
            </button>
           {msg && <p style={{color : `${msg.color}`}} className="msg-para">{msg.message}</p>}
          </div>
          <div className="tasks">
           {renderTaskList}
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
