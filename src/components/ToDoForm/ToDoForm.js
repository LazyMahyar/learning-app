import './ToDoForm.css'
import { useState } from 'react'

export const ToDoForm = (props) => {
    const [textValue, setTextValue] = useState('');
    const [dateValue, setDateValue] = useState('');

    const textChangeHandler = (event) => {
        setTextValue(event.target.value);
    }
    
    const dateChangeHandler = (event) => {
        setDateValue(event.target.value);
    }

    const submitForm = (event) => {
        event.preventDefault();
        const enteredToDoData = {
            todo: textValue,
            date: new Date(dateValue)
        }

        props.onSaveToDo(enteredToDoData);
        setDateValue('');
        setTextValue('');
    }

    return <form onSubmit={submitForm}>
        <div className='todo-new_all'>
            <div className='todo-new_controls'>
                <div className='todo-new_wrapper'>
                    <label className='todo-new_label'>to do:</label>
                    <input className='todo-new_input' type='text' value={textValue} onChange={textChangeHandler}/>
                </div>
            </div>
            <div className='todo-new_controls'>
                <div className='todo-new_wrapper'>
                    <label className='todo-new_label'>date:</label>
                    <input className='todo-new_input' type='date' value={dateValue} onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className='todo-new_actions'>
                <button type='submit'  className='todo-new_submit'>add to do</button>
            </div>
        </div>
    </form>
}