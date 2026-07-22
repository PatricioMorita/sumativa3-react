/*
 * TodoFooter.jsx
 * Componente local (requerimiento c), sugerido como "TodoFooter".
 * Pie de pagina de la aplicacion, con estilos de Bootstrap
 * (requerimiento b).
 */
function TodoFooter() {
  const anio = new Date().getFullYear()

  return (
    <footer className="bg-dark text-light text-center py-3 mt-auto">
      <div className="container">
        <small>
          Sumativa 3 &mdash; Programacion Front End | INACAP &copy; {anio}
          <br />
          Desarrollado con React + Vite y Bootstrap 5
        </small>
      </div>
    </footer>
  )
}

export default TodoFooter
