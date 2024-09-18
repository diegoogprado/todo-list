import { useState } from "react"
import "./app.css"
import Cards from "./components/Cards"
import CreateTaskDiv from "./components/CreateTaskDiv"
import DivFilter from "./components/DivFilter"
import DivTitle from "./components/divTitle"
import handleTasks from "./hooks/handleTasks"

export default function App() {
  // const [ tasks, setTasks ] = useState(() => {
  //   const storedTasks = localStorage.getItem('todo-list')
  //   if(!storedTasks) return []
  //   return JSON.parse(storedTasks)
  // })

  // const [ search, setSearch ] = useState("")

  // const [ filter, setFilter ] = useState("All")

  // const [ sort , setSort ] = useState("Asc")

  // const addTask = (text, category) => {
  //   const newTask = {
  //           id: Math.floor(Math.random() * 1000),
  //           text,
  //           category,
  //           isCompleted: false,
  //       }

  //   setTasks(state => {
  //     const newState = [ newTask, ...state]
  //     localStorage.setItem("todo-list", JSON.stringify(newState))
  //     return newState
  //   })
  // }


  // const removeTask = (id) => {
  //   const newTasks = [...tasks]
  //   const filteredTasks = newTasks.filter((task) =>
  //     task.id !== id ? task : null
  //   )
  //   setTasks(() => {
  //     localStorage.setItem("todo-list", JSON.stringify(filteredTasks))
  //     return filteredTasks
  //   })
  // }

  // const completeTask = (id) => {
  //   const newTasks = [...tasks]
  //   newTasks.map((task) => task.id === id ? task.isCompleted = !task.isCompleted : task)
  //   setTasks(() => {
  //     localStorage.setItem("todo-list", JSON.stringify(newTasks))
  //      return newTasks
  //   })
  // }

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

