import { useState, useEffect } from "react";
import Task from "../Task/Task";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const res = await fetch("http://localhost:8000/tasks");
      const resData = await res.json();
      setTasks(resData);
    };
    getTasks();
  }, []);

  return (
    <div>
      {tasks.map((item) => (
        <Task data={item} key={item.id} />
      ))}
    </div>
  );
};

export default TaskList;
