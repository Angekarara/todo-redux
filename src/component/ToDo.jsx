import React, { useState } from "react";
import { FaTrash } from "react-icons/fa6";

function ToDo() {
  const [toDos, setToDos] = useState("");

  return (
    <div>
      <form className="flex items-center justify-center">
        <input
          type="text"
          onChange={(event) => setToDos(event.target.value)}
          className="border border-gray-400 rounded-md"
        />
        <button></button>
      </form>
      <div>
        <p></p>
        <button>
          <FaTrash className="text-red-500" />
        </button>
      </div>
    </div>
  );
}

export default ToDo;
