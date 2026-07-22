import { useState } from 'react'

import TodoHeader from './components/TodoHeader'
import AgregarTarea from './components/AgregarTarea'
import TodoList from './components/TodoList'
import ResumenTareas from './components/ResumenTareas'
import TodoFooter from './components/TodoFooter'

import './App.css'

/*
 * App.jsx
 * -----------------------------------------------------------
 * Componente raiz de la aplicacion. Concentra el ESTADO (las
 * tareas) y las funciones que lo modifican, y las reparte como
 * props hacia los componentes hijos (elevacion del estado).
 */
function App() {
  // Estado inicial: 4 tareas de ejemplo, igual que el proyecto de referencia
  const [tareas, setTareas] = useState([
    { id: 1, texto: 'Tarea 1', completada: true },
    { id: 2, texto: 'Tarea 2', completada: false },
    { id: 3, texto: 'Tarea 3', completada: true },
    { id: 4, texto: 'Tarea 4', completada: false },
  ])

  // Agrega una nueva tarea al final de la lista (boton verde +)
  const agregarTarea = (texto) => {
    const limpio = texto.trim()
    if (limpio === '') return
    const nueva = { id: Date.now(), texto: limpio, completada: false }
    setTareas([...tareas, nueva])
  }

  // Elimina la ultima tarea de la lista (boton rojo -)
  const eliminarUltima = () => {
    setTareas(tareas.slice(0, -1))
  }

  // Elimina una tarea puntual por su id
  const eliminarTarea = (id) => {
    setTareas(tareas.filter((t) => t.id !== id))
  }

  // Marca / desmarca una tarea como completada (checkbox)
  const alternarTarea = (id) => {
    setTareas(
      tareas.map((t) =>
        t.id === id ? { ...t, completada: !t.completada } : t
      )
    )
  }

  // Cantidad de tareas pendientes (no completadas)
  const pendientes = tareas.filter((t) => !t.completada).length

  return (
    <div className="d-flex flex-column min-vh-100 bg-light">
      <TodoHeader />

      <main className="container flex-grow-1 py-4">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6">
            <AgregarTarea onAgregar={agregarTarea} onEliminarUltima={eliminarUltima} />

            <TodoList
              tareas={tareas}
              onAlternar={alternarTarea}
              onEliminar={eliminarTarea}
            />

            <ResumenTareas pendientes={pendientes} total={tareas.length} />
          </div>
        </div>
      </main>

      <TodoFooter />
    </div>
  )
}

export default App
