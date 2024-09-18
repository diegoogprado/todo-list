import { useState } from "react"
import SingleCard from "./SingleCard"

export default function Cards({ tasks, removeTask, completeTask, search , filter, sort }) {
    return (
        <div className="cards">
            {tasks.filter((task) => filter === "All" ? true : filter === "Completed" ? task.isCompleted : !task.isCompleted
            )
            .filter((task) =>
                task.text.toLowerCase().includes(search.toLowerCase())
            )
            .sort((a, b) => sort === "Asc" ? a.text.localeCompare(b.text) : b.text.localeCompare(a.text))
            .map((task) => (
                <SingleCard  completeTask={completeTask} removeTask={removeTask} task={task} key={task.id}/>
            ))}
        </div>
    )
}