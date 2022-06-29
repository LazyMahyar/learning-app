import './NewToDo.css'
import { ToDoForm } from '../ToDoForm/ToDoForm'

export const NewToDo = (props) => {
    const saveToDoDataHandler = (enteredToDoData) => {
        const toDoData = {
            ...enteredToDoData
        } 
        props.onAddToDo(toDoData);
    }

    return <div className='todo-new'>
        <ToDoForm onSaveToDo={saveToDoDataHandler}/>
    </div>
}