import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/todoSlice";
import Icon from "../assets/icon.png";

const AddTodo = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch(addTodo(text.trim()));
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1 className="todo-title">
        <span>Microsoft Todo</span>
        <img src={Icon} alt="icon" />
      </h1>

      <div className="todo-input">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add task..."
        />
        <button type="submit">ADD</button>
      </div>
    </form>
  );
};

export default AddTodo;
