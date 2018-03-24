import React from "react";
import "./Todo.css"


const Todo = (props) => {
    const t = props.todo;
    return (
        <li className={t.completed ? "Todo-done" : "Todo-undone"} onClick={props.done}>
            {t.text} {t.completed ? "+" : "-"}
        </li>
    );
}

export default Todo;