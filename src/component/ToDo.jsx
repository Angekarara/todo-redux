import React, { useState } from "react";
import { FaTrash } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { addTask, deleteTask } from "../features/toDoList";
import { useDispatch, useSelector } from "react-redux";

function ToDo() {
  const [toDos, setToDos] = useState("");
  const tasks = useSelector((state) => state.task.value);
  const dispatch = useDispatch();

  const handleAddTask = (e) => {
    e.preventDefault();
    if (toDos.trim()) {
      dispatch(addTask({ text: toDos }));
      setToDos("");
    }
  };

  const handleDeleteTask = (index) => {
    dispatch(deleteTask(index));
  };

  return (
    <div className="flex-col h-screen flex items-center justify-center ">
      <h1 className="text-[200px] text-center text-[#eaeaea]">Todos</h1>
      <form className="" onSubmit={handleAddTask}>
        <input
          type="text"
          onChange={(event) => setToDos(event.target.value)}
          value={toDos}
          className="border border-gray-400 rounded-md w-[1000px] p-7"
        />
        <button>
          <FaPlus className="bg-[#008d8c] text-white rounded-full font-bold text-3xl" />
        </button>
      </form>
      <div>
        {tasks.map((task, index) => (
          <div key={index} className="flex">
            <p>{task.text}</p>
            <button onClick={() => handleDeleteTask(index)}>
              <FaTrash className="text-red-500" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ToDo;
