import './App.css';
import { ToDoItem } from './components/ToDo';
import { Nav } from './components/Nav';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <ToDoItem name="do this" date="2020/1/1"></ToDoItem>
      <ToDoItem name="do that" date="2020/11/1"></ToDoItem>
      <ToDoItem name="b-day" date="2007/11/23"></ToDoItem>
    </div>
  );
}

export default App;
