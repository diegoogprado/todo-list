export default function SingleCard({ task, removeTask, completeTask }) {
    return (
        <div className="singleCard">
            <div className="cardText" style={{textDecoration: task.isCompleted ? "line-through" : ""}}>
              <h4>{task.text}</h4>
              <p>({task.category})</p>
            </div>
            <div className="cardAction">
              <button onClick={() => completeTask(task.id)} id="completeBtn">Completar</button>
              <button onClick={() => removeTask(task.id)} id="exclusionBtn">X</button>
            </div>
          </div>
    )
}