import { useRef, useState } from "react";
import Modal from "./Modal";

export default function NewTask({ onAddTask, onDeleteTask }) {
  const [enteredTask, setEnteredTask] = useState("");
  const dialog = useRef();

  const handleChange = (e) => {
    setEnteredTask(e.target.value);
  };

  const handleClick = (e) => {
    if (enteredTask.trim() === "") {
      dialog.current.open();
      return;
    }
    onAddTask(enteredTask);
    setEnteredTask("");
  };

  return (
    <>
      <Modal ref={dialog} btnContent="Close">
        <h2 className="text-xl font-bold text-stone-500 my-4">Invalid Input</h2>
        <p className="text-stone-400 mb-4">
          Oops... looks like you forgot to enter a value...
        </p>
        <p className="text-stone-400 mb-4">
          To proceed further please enter proper values...
        </p>
      </Modal>
      <div className="flex gap-4 items-center">
        <input
          value={enteredTask}
          onChange={handleChange}
          type="text"
          className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        />
        <button
          onClick={handleClick}
          className="text-stone-700 hover:text-stone-950"
        >
          Add Task
        </button>
      </div>
    </>
  );
}
