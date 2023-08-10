import { Link } from "react-router-dom"

const Error = () => {
  return (
    <div className="my-2 text-center">
      <h1>Error 404</h1>
      <p>Ups...parece que lo que buscabas no existe. Te invitamos a probar nuestras empanadas. Podes ver nuestro catalogo <Link to='/'> aquí</Link>.</p>
    </div>
  )
}

export default Error