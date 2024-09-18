import { useState } from "react"

export default function CreateTaskDiv({ addTask }) {
    const [ title , setTitle ] = useState("")
    const [ category, setCategory ] = useState("")
    
    const handleSubmit = (ev) => {
        ev.preventDefault()
        if(!title || !category) return
        addTask(title, category)
        setTitle("")
        setCategory("")
        console.log(title, category)
    }

    return (
        <form onSubmit={handleSubmit} className="createTaskDiv">
            <h2>Criar tarefa:</h2>
            <input 
                type="text"
                id="taskTitle"
                placeholder="Digite o título da tarefa"
                value={title}
                onChange={(ev) => setTitle(ev.target.value)}/>
            <select value={category} onChange={(ev) => setCategory(ev.target.value)}>
                <option value="" >Selecione a categoria</option>
                <option value="Trabalho">Trabalho</option>
                <option value="Pessoal">Pessoal</option>
                <option value="Estudos">Estudos</option>
            </select>
            <button type="submit" id="createTask">Criar tarefa</button>
        </form>
    )
}