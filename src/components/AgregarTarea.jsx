import { useState } from 'react'

/*
 * AgregarTarea.jsx
 * Componente local (requerimiento c). Contiene el input para
 * escribir una tarea y los botones que dan funcionalidad a la
 * lista (requerimiento b): boton verde (+) agrega, boton rojo (-)
 * elimina la ultima tarea.
 */
function AgregarTarea({ onAgregar, onEliminarUltima }) {
  const [texto, setTexto] = useState('')

  const handleAgregar = () => {
    onAgregar(texto)
    setTexto('')
  }

  // Permite agregar la tarea presionando Enter
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleAgregar()
  }

  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Agregar Tarea"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button
        className="btn btn-success"
        type="button"
        onClick={handleAgregar}
        title="Agregar tarea"
      >
        <i className="bi bi-plus-lg"></i>
      </button>
      <button
        className="btn btn-danger"
        type="button"
        onClick={onEliminarUltima}
        title="Eliminar ultima tarea"
      >
        <i className="bi bi-dash-lg"></i>
      </button>
    </div>
  )
}

export default AgregarTarea
