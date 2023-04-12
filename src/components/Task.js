import React from 'react';

import { FaTimesCircle } from 'react-icons/fa';

const Task = ({ tasklist, onDelete, onToggle }) => {
    return (
        // <div className='task' onDoubleClick={()=>onToggle(tasklist.id)} >
        <div className={`task ${tasklist.reminder ? 'reminder' : ''}`} onDoubleClick={()=>onToggle(tasklist.id)} >
            <h3> 
            <FaTimesCircle style={{ color: 'red', cursor: 'pointer' }} 
            onClick={() => onDelete(tasklist.id)} />
            {tasklist.text}
            </h3>
            <p className="task__para">{tasklist.day}</p>
        </div>
    )
}

export default Task