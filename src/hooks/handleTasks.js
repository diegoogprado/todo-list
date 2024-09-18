import { useState } from "react"

export default function handleTasks() {
    const [ tasks, setTasks ] = useState(() => {
        const storedTasks = localStorage.getItem('todo-list')
        if(!storedTasks) return []
        return JSON.parse(storedTasks)
      })
    
      const [ search, setSearch ] = useState("")
    
      const [ filter, setFilter ] = useState("All")
    
      const [ sort , setSort ] = useState("Asc")
    
      const addTask = (text, category) => {
        const newTask = {
                id: Math.floor(Math.random() * 1000),
                text,
                category,
                isCompleted: false,
            }
    
        setTasks(state => {
          const newState = [ newTask, ...state]
          localStorage.setItem("todo-list", JSON.stringify(newState))
          return newState
        })
      }
    
    
      const removeTask = (id) => {
        const newTasks = [...tasks]
        const filteredTasks = newTasks.filter((task) =>
          task.id !== id ? task : null
        )
        setTasks(() => {
          localStorage.setItem("todo-list", JSON.stringify(filteredTasks))
          return filteredTasks
        })
      }
    
      const completeTask = (id) => {
        const newTasks = [...tasks]
        newTasks.map((task) => task.id === id ? task.isCompleted = !task.isCompleted : task)
        setTasks(() => {
          localStorage.setItem("todo-list", JSON.stringify(newTasks))
           return newTasks
        })
      }

      return { tasks, setTasks,  search, setSearch, filter, setFilter, sort , setSort, addTask, removeTask, completeTask }
}

