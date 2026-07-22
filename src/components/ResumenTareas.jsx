/*
 * ResumenTareas.jsx
 * Componente local (requerimiento c), sugerido en el enunciado
 * como "ResumenTareasRealizadas". Muestra un panel (card de
 * Bootstrap) con la cantidad de tareas pendientes y realizadas.
 */
function ResumenTareas({ pendientes, total }) {
  const realizadas = total - pendientes

  return (
    <div className="card text-center border-0 shadow-sm bg-info-subtle">
      <div className="card-body">
        <h2 className="card-title h4 text-info-emphasis fw-bold">
          RESUMEN TAREAS
        </h2>
        <p className="card-text fs-5 text-info-emphasis mb-1">
          Tareas pendientes : <strong>{pendientes}</strong>
        </p>
        <p className="card-text text-secondary mb-0">
          Realizadas: {realizadas} de {total}
        </p>
      </div>
    </div>
  )
}

export default ResumenTareas
