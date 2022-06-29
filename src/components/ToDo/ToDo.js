import { useState } from 'react';
import './ToDo.css'

export const ToDoItem = (props) =>{
    const [classname,setClassname] = useState(props.classname);
    const select = () => {
        if(classname === "item-selected"){
            setClassname("item");
        }
        else{
            setClassname("item-selected");
        }
    }
    const date = new Date(props.date);
    const id = props.id;
    return (
        <div className={"todo-"+classname}>
            <h1 className="todo-name" onClick={select}>{props.name}</h1>
            <input className="todo-checkbox" type="checkbox"></input>
            <h3 className="todo-date">{date.toLocaleDateString("fa-ir",{})}</h3>
        </div>
    )
}