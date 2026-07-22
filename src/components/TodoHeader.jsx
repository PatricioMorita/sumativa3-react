/*
 * TodoHeader.jsx
 * Componente local (requerimiento c). Encabezado de la aplicacion
 * construido con clases de Bootstrap (navbar) (requerimiento b).
 */
function TodoHeader() {
  return (
    <header>
      <nav className="navbar navbar-dark bg-dark shadow-sm">
        <div className="container justify-content-center">
          <span className="navbar-brand mb-0 h1 d-flex align-items-center gap-2">
            <i className="bi bi-check2-square"></i>
            Listado de Tareas
          </span>
        </div>
      </nav>
    </header>
  )
}

export default TodoHeader
