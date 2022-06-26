import './ToDo.css'

export function ToDoItem(props){
    const date = new Date(props.date);
    return (
        <div class="todo-item">
            <h1 class="todo-name">{props.name}</h1>
            <input class="todo-checkbox" type="checkbox"></input>
            <h3 class="todo-date">{date.toLocaleDateString("fa-ir",{})}</h3>
        </div>
    )
}