export default function DivTitle({ search, setSearch }) {

    return (
        <div className="divTitle">
          <h1>Lista de Tarefas</h1>
          <div className="divSearch">
            <h2>Pesquisar:</h2>
            <input type="text" value={search} onChange={(ev) => setSearch(ev.target.value)} placeholder="Pesquise por uma tarefa."/>
          </div>
        </div>
    )
}