export default function DivFilter( { filter, setFilter, setSort }) {
    return (
        <div className="divFilter">
          <h2>Filtrar:</h2>
          <div className="filterOptions">
            <div className="filterStatus">
              <p>Status:</p>
              <select value={filter} onChange={(ev) => setFilter(ev.target.value)} id="selecStatus">
                <option value="All">Todas</option>
                <option value="Completed">Completas</option>
                <option value="Incomplete">Incompletas</option>
              </select>
            </div>
            <div className="filterOrder">
              <p>Ordem alfabética:</p>
              <div className="filterButtons">
                <button onClick={() => setSort("Asc")}>Asc</button>
                <button onClick={() => setSort("Desc")}>Desc</button>
              </div>
            </div>
          </div>
        </div>
    )
}