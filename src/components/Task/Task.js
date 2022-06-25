const Task = ({ data }) => {
  return (
    <div>
      <label>
        <input
          type="checkbox"
          id={data.id}
          value={data.title}
          name={data.title}
          defaultChecked={data.completed}
        />
        {data.title}
      </label>
    </div>
  );
};

export default Task;
