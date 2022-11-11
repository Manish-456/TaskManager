import React, { useState } from "react";
import "../static/Update.css";
import CancelIcon from "@mui/icons-material/Cancel";
import { useLocation, useNavigate } from "react-router-dom";
import { useTaskContext } from "../context/taskContext";

const Update = () => {
  const location = useLocation();
  const { _id, name, completed } = location.state.task;
  const { updateTasks } = useTaskContext();
  const [newName, setNewName] = useState(name);
  const [isChecked, setIsChecked] = useState(completed);
 const [msg, setMsg] = useState()
  const navigate = useNavigate('');

  const updateHandler = () => {
    if (newName === "") {
      return alert("cannot set the field  empty");
    }
    updateTasks({ _id, name: newName });
    if(isChecked){
      setMsg("Updated SuccessFully")
    }
    setTimeout(() => {
      navigate("/");
    }, 1000)
    
  };
  const cancelHandler = () => {
    navigate("/");
  };
  return (
    <div>
      <div className="container">
        <div className="inner">
          <div className="inputBox">
            <h5 className="h3">Update</h5>
            <CancelIcon className="cancel" onClick={cancelHandler} />
            <input
              type="text"
              id="update"
              value={newName}
              pattern = "[a-z]*"
              onChange={(e) => setNewName(e.target.value)}
              name="update"
            />
            <br />
            <div className="check">
              <input
                checked={isChecked}
                onChange={(e) => setIsChecked(e.target.checked)}
                type="checkbox"
                id="check"
                name="check"
              />
              <label htmlFor="check">Completed</label>
            </div>
            <br />
            <p>{msg}</p>
            <button
            disabled={isChecked? false : true}
              type="button"
              onClick={updateHandler}
              className="btn btn-success"
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Update;
