import './ToDo.css'

export function ToDoItem(props){
    const select = () => {document.querySelector("#todo-item-" + id).style.backgroundColor = "#1c6cd5";console.log("a");}
    const date = new Date(props.date);
    const id = props.id;
    return (
        <div className="todo-item" id={"todo-item-"+id}>
            <h1 className="todo-name" onClick={select}>{props.name}</h1>
            <input className="todo-checkbox" type="checkbox"></input>
            <h3 className="todo-date">{date.toLocaleDateString("fa-ir",{})}</h3>
        </div>
    )
}