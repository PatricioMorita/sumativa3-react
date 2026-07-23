import { useState } from 'react'

// Componentes EXTERNOS: se importan desde la libreria de terceros
// "react-bootstrap" (no fueron escritos por nosotros).
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'

// Imagen corporativa incluida como recurso del proyecto (Vite la empaqueta)
import imagenCorporativa from '../assets/imagen-corporativa.jpg'

/*
 * AgregarImagenCorporativa.jsx
 * ----------------------------------------------------------------
 * Requerimiento c: incorpora un COMPONENTE EXTERNO. Este componente
 * utiliza los componentes <Card>, <Image> y <Button> importados de
 * la libreria externa "react-bootstrap".
 *
 * Muestra una imagen corporativa que el usuario puede mostrar u
 * ocultar con un boton.
 */
function AgregarImagenCorporativa() {
  const [visible, setVisible] = useState(true)

  return (
    <Card className="text-center shadow-sm border-0 mb-4">
      <Card.Header className="bg-primary text-white fw-bold">
        Imagen Corporativa
      </Card.Header>

      {visible && (
        <Image src={imagenCorporativa} alt="Imagen corporativa" fluid rounded />
      )}

      <Card.Body>
        <Card.Text className="text-muted">
          Componente externo construido con la libreria react-bootstrap.
        </Card.Text>
        <Button
          variant={visible ? 'outline-secondary' : 'outline-primary'}
          size="sm"
          onClick={() => setVisible(!visible)}
        >
          {visible ? 'Ocultar imagen' : 'Mostrar imagen'}
        </Button>
      </Card.Body>
    </Card>
  )
}

export default AgregarImagenCorporativa
