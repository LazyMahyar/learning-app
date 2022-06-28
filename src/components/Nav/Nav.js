import './Nav.css'

function Button(props){
    return <button className="nav-btn">{props.name}</button>
}

export function Nav(){
    return(
        <div className="nav">
            <Button name="new to do"></Button>
            <Button name="remove done"></Button>
            <Button name="clear all"></Button>
        </div>
    )
}