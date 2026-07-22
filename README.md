# Sumativa 3 — Listado de Tareas (React + Vite)

Aplicación SPA de **lista de tareas** desarrollada con **React 19 + Vite** y
estilizada con **Bootstrap 5**, para la asignatura **Programación Front End**
(Unidad 3), INACAP.

## Funcionalidades

- Agregar tareas (botón verde **+** o tecla Enter).
- Eliminar la última tarea (botón rojo **−**) o cualquier tarea (ícono papelera).
- Marcar/desmarcar tareas como completadas (checkbox).
- Panel de **Resumen** con la cantidad de tareas pendientes y realizadas.
- Interfaz con **Header**, **Footer**, **Lista** y **botones** estilizados con Bootstrap.

## Estructura del proyecto

```
sumativa3-react/
├─ index.html                 # HTML raíz, punto de entrada de Vite
├─ package.json               # Dependencias y scripts (dev, build, preview)
├─ vite.config.js             # Configuración de Vite + plugin de React
├─ public/                    # Archivos estáticos servidos tal cual
└─ src/
   ├─ main.jsx                # Punto de arranque: monta <App> e importa Bootstrap
   ├─ App.jsx                 # Componente raíz: ESTADO de las tareas + lógica
   ├─ App.css                 # Estilos propios que complementan Bootstrap
   ├─ index.css               # Estilos globales base
   └─ components/
      ├─ TodoHeader.jsx       # Encabezado (navbar)
      ├─ AgregarTarea.jsx     # Input + botones +/- para la lista
      ├─ TodoList.jsx         # Lista que recorre las tareas (.map)
      ├─ TodoItem.jsx         # Una tarea: checkbox + texto + eliminar
      ├─ ResumenTareas.jsx    # Panel con el resumen de pendientes
      └─ TodoFooter.jsx       # Pie de página
```

## Cómo ejecutar

```bash
npm install      # instala dependencias (React, Vite, Bootstrap)
npm run dev      # servidor de desarrollo en http://localhost:5173
npm run build    # genera la versión de producción en dist/
```

## Tecnologías

- React 19
- Vite 8
- Bootstrap 5.3 + Bootstrap Icons
