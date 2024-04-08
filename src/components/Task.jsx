import React from 'react';
import { useNavigate } from 'react-router-dom';


import {CgClose, CgInfo} from 'react-icons/cg';

import './Task.css'

const Task = ({task, handleTaskClick, handleTaskDeletion}) => {
    const navigate = useNavigate();

    const handleTaskDetailsClick = () => {
        navigate(`/${task.title}`)
    }

    return <div className='task-container' 
            style={task.completed ? { borderLeft: '6px solid chartreuse'} : {}}
            >
            <div className='task-title' onClick={()=> {handleTaskClick(task.id)}}>
                {task.title}
            </div>

            <div className='buttons-container'>
                <button 
                className='remove-task-button' 
                onClick={() => {handleTaskDeletion(task.id)}}>
                    <CgClose/>
                </button>

                <button 
                className='see-task-datails-button' onClick={handleTaskDetailsClick}>
                    <CgInfo/>
                </button>
            </div>
    </div>;
}
 
export default Task;