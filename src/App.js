import './App.css';
import { ToDoItem } from './components/ToDo/ToDo';
import { Nav } from './components/Nav/Nav'

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <ToDoItem name="do this" date="2020/1/1" id="1"></ToDoItem>
      <ToDoItem name="do that" date="2020/11/1" id="2"></ToDoItem>
      <ToDoItem name="b-day" date="2007/11/23" id="3"></ToDoItem>
    </div>
  );
}

export default App;
