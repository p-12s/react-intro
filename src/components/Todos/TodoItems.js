import React from "react"
import TodoItem from "./TodoItem"
import todosData from "../../data/todosData"

function TodoItems() {
    const todoItems = todosData.map(item => <TodoItem key={item.id} item={item}/>)

    return (
        <div className="todo-list">
            {todoItems}
        </div>
    )
}

export default TodoItems