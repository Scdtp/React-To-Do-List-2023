import React from 'react'
import {useState} from 'react';

const AddTask = ({onAdd}) => {
    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState(false);
    
    const onSubmit = (e) => {
        e.preventDefault();

        if(!text){
            alert('Please add task!');
            return
        }

        onAdd({text, day, reminder})
        setText('');
        setDay('');
        setReminder(false);
    }
  return (
    <form className="form form--add" onSubmit={onSubmit}>
        <div className="form__controller">
            <label className="form__label">Task</label> 
            <input className="form__input" type="text"  placeholder="Add New Task" value={text} onChange={(e)=>setText(e.target.value)} />
        </div>
        <div className="form__controller">
            <label className="form__label">Day & Time</label> 
            <input className="form__input" type="text"  placeholder="Add Day & Time" value={day} onChange={(e)=>setDay(e.target.value)} />
        </div>
        
        <div className="form__controller">
            <label className="form__label--check">Set Reminder</label> 
            <input className="form__input--check" type="checkbox"  checked={reminder} value={reminder} onChange={(e)=>setReminder(e.currentTarget.checked)} />
        </div>
        <input className="btn btn--block" type="submit" value="Save Task" />
    </form>
  )
}

export default AddTask