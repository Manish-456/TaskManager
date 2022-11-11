import React from 'react'
import '../static/TaskList.css'
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useTaskContext } from '../context/taskContext';
import { Link } from 'react-router-dom';
import { useToolsContext } from '../context/tools';
const TaskList = (props) => {
const {deleteTask} = useTaskContext()
const {name, _id, completed} = props.tasks
const {color, style} = useToolsContext()
  return (
    <div>
      <div>   
          
         <div  className="task_list">
    
      <div  className="flex">
        <p className='Task' style={{color: `${color}`, textDecoration:`${style}`, fontWeight: `${style}`, fontStyle: `${style}`}} >{name}</p>
       <div className="icons">
        <Link to='/edit' state={{task : props.tasks}}>
        <BorderColorIcon className='icon icon1' title='Edit'/>
        </Link>
        <DeleteForeverIcon onClick={() => {deleteTask(_id)}} className='icon icon2' />
        </div>
         </div>
 </div>
      </div>
    </div>
  )
}

export default TaskList
