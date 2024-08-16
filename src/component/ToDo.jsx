import React, { useState } from "react";
import { FaTrash } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import  { addTask } from "../features/toDoList";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

function ToDo() {
  const [toDos, setToDos] = useState("");
  const task = useSelector((state) => state.task.value);
  const dispatch = useDispatch();

  return (
    <div className="flex-col h-screen flex items-center justify-center ">
      <h1 className="text-[200px] text-center text-[#eaeaea]">Todos</h1>
      <form className="">
        <input
          type="text"
          onChange={(event) => setToDos(event.target.value)}
          value={task.text}
          className="border border-gray-400 rounded-md w-[1000px] p-7"
        />
        <button
          onClick={() => {
            dispatch(addTask);
          }}
        >
          <FaPlus className="bg-[#008d8c] text-white rounded-full font-bold text-3xl" />
        </button>
      </form>
      <div>
        <p>{task.text}</p>
        <button>
          <FaTrash className="text-red-500 hidden" />
        </button>
      </div>
    </div>
  );
}

export default ToDo;
