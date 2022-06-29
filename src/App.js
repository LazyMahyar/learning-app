import './App.css';
import { ToDoItem } from './components/ToDo/ToDo';
import { Nav } from './components/Nav/Nav'
import { NewToDo } from './components/NewToDo/NewToDo';

const App = () => {
  return (
    <div className="App">
      {/* <Nav></Nav> */}
      <NewToDo/>
      <ToDoItem name="do this" date="2020/1/1" classname="item"></ToDoItem>
      <ToDoItem name="do that" date="2020/11/1" classname="item"></ToDoItem>
      <ToDoItem name="b-day" date="2007/11/23" classname="item"></ToDoItem>
    </div>
  );
}

export default App;
