import TodoItem from './TodoItem'

/*
 * TodoList.jsx
 * Componente que despliega la LISTA de tareas (requerimiento b).
 * Recibe el arreglo de tareas por props y renderiza un TodoItem
 * por cada una usando .map(). La lista usa el componente
 * list-group de Bootstrap.
 */
function TodoList({ tareas, onAlternar, onEliminar }) {
  if (tareas.length === 0) {
    return (
      <p className="text-center text-muted fst-italic my-4">
        No hay tareas. Agrega una con el boton verde (+).
      </p>
    )
  }

  return (
    <ul className="list-group shadow-sm mb-4">
      {tareas.map((tarea) => (
        <TodoItem
          key={tarea.id}
          tarea={tarea}
          onAlternar={onAlternar}
          onEliminar={onEliminar}
        />
      ))}
    </ul>
  )
}

export default TodoList
