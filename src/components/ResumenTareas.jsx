/*
 * ResumenTareas.jsx
 * Componente local (requerimiento c), sugerido en el enunciado
 * como "ResumenTareasRealizadas". Muestra un panel (card de
 * Bootstrap) con un mensaje PERSONALIZADO segun cuantas tareas
 * quedan pendientes:
 *   - 0 pendientes  -> mensaje de felicitacion.
 *   - 1 pendiente   -> mensaje en singular.
 *   - 2 o mas       -> cantidad de tareas pendientes.
 */
function ResumenTareas({ pendientes, total }) {
  const realizadas = total - pendientes

  // Elige el mensaje y el color del panel segun las pendientes
  let mensaje
  let estilo
  if (total === 0) {
    mensaje = 'Agrega tu primera tarea para comenzar.'
    estilo = 'bg-light text-secondary'
  } else if (pendientes === 0) {
    mensaje = '¡Bien hecho, amigo! No tienes tareas pendientes.'
    estilo = 'bg-success-subtle text-success-emphasis'
  } else if (pendientes === 1) {
    mensaje = '¡Ánimo! Te queda solo 1 tarea pendiente.'
    estilo = 'bg-warning-subtle text-warning-emphasis'
  } else {
    mensaje = `Tienes ${pendientes} tareas pendientes.`
    estilo = 'bg-info-subtle text-info-emphasis'
  }

  return (
    <div className={'card text-center border-0 shadow-sm ' + estilo}>
      <div className="card-body">
        <h2 className="card-title h4 fw-bold">RESUMEN TAREAS</h2>
        <p className="card-text fs-5 mb-1">{mensaje}</p>
        <p className="card-text text-secondary mb-0">
          Realizadas: {realizadas} de {total}
        </p>
      </div>
    </div>
  )
}

export default ResumenTareas
