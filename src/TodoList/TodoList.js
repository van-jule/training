import React from "react";
import s from "./TodoList.module.css";

const TodoList = ({ todos, onDeleteTodo }) => (
  <ul className={s.TodoList}>
    {todos.map(({ id, text }) => (
      <li className={s.TodoListItem} key={id}>
        <p>{text}</p>
        <button className={s.Button} onClick={() => onDeleteTodo(id)}>
          Удалить
        </button>
      </li>
    ))}
  </ul>
);

export default TodoList;
