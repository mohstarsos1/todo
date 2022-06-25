import "./App.css";
import AddTask from "./components/AddTask/AddTask";
import TaskList from "./components/TaskList/TaskList";

function App() {
  return (
    <div className="App">
      To Do App
      <AddTask />
      <TaskList />
    </div>
  );
}

export default App;
