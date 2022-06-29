import './Nav.css'

const Button = (props) => {
    return <button className="nav-btn">{props.name}</button>
}

export const Nav = () =>{
    return(
        <div className="nav">
            <Button name="new to do"></Button>
            <Button name="remove done"></Button>
            <Button name="clear all"></Button>
        </div>
    )
}