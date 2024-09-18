import { useState } from "react"
import "./app.css"
import Cards from "./components/Cards"
import CreateTaskDiv from "./components/CreateTaskDiv"
import DivFilter from "./components/DivFilter"
import DivTitle from "./components/DivTitle"
import handleTasks from "./hooks/handleTasks"

export default function App() {
  
  const { tasks, setTasks,  search, setSearch, filter, setFilter, sort , setSort, addTask, removeTask, completeTask } = handleTasks()

  return (
    <div className="app">
      <main>
        <DivTitle search={search} setSearch={setSearch} />
        <DivFilter filter={filter} setFilter={setFilter} setSort={setSort} />
        <Cards sort={sort} filter={filter} search={search} completeTask={completeTask} removeTask={removeTask} tasks={tasks} setTasks={setTasks} />
        <CreateTaskDiv addTask={addTask} />
      </main> 

    </div>
  )
}

