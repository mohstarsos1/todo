import { useState,useEffect } from 'react'
import Task from '../Task/Task'

const TaskList = () => {

    const [tasks,setTasks] = useState([])

    useEffect(() => {
      const getTasks = async()=>{
        const res = await fetch('https://jsonplaceholder.typicode.com/todos');
        const resData = await res.json()
        setTasks(resData)
      }
      getTasks()
    }, [])
    
  return (
    <div>
        {tasks.map((item)=>(
            <Task data={item} />
        ))}
    </div>
  )
}

export default TaskList