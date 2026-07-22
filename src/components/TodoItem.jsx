/*
 * TodoItem.jsx
 * Representa UNA tarea de la lista. Muestra un checkbox para
 * marcarla como completada y un boton para eliminarla. Recibe la
 * tarea y los manejadores de eventos por props.
 */
function TodoItem({ tarea, onAlternar, onEliminar }) {
  return (
    <li className="list-group-item d-flex align-items-center">
      <input
        type="checkbox"
        className="form-check-input me-3"
        checked={tarea.completada}
        onChange={() => onAlternar(tarea.id)}
      />

      <span
        className={
          'flex-grow-1 text-start ' +
          (tarea.completada ? 'text-decoration-line-through text-muted' : '')
        }
      >
        {tarea.texto}
      </span>

      <button
        className="btn btn-outline-danger btn-sm"
        type="button"
        onClick={() => onEliminar(tarea.id)}
        title="Eliminar esta tarea"
      >
        <i className="bi bi-trash"></i>
      </button>
    </li>
  )
}

export default TodoItem
