import { useState } from "react";

const AddTask = () => {
  const [data, setData] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:8000/tasks", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ title: data, completed: false }),
    });
    const responseData = response.json();
    console.log(responseData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={data}
          onChange={(e) => setData(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default AddTask;
