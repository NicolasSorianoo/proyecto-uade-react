
import { useNavigate, useActionData, Form, redirect } from "react-router-dom"
import Formulario from "../components/Formulario"
import Error from "../components/Error";
import { obtenerProovedor } from "../data/proovedores";

export async function action ({request}) {
  const formData = await request.formData();

  const datos = Object.fromEntries(formData)
  const mail = formData.get('email')
  const errores = []

  if(Object.values(datos).includes('')){
    errores.push('Todos los campos son obligarorios')
  }

  if(Object.keys(errores).length){
    return errores
  }

  await obtenerProovedor(datos)
  return redirect('/proovedores') 
}

export const Nuevoproovedor = () => {
  const navigate = useNavigate();
  const errores = useActionData();
  return (
    <>
      <h1 className="text-blue-900 font-black text-4xl">Formulario de Proovedor</h1>
      <p className="mt-3">Llena los campos para registrarte </p>
      <div className="flex justify-end mt-2">
        <button
          className="bg-blue-900 text-white uppercase px-3 py-1 font-bold"
          onClick={()=> navigate('/proovedores')}
        >
        Volver
        </button>
        
      </div>

      <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-10">

        {errores?.length && errores.map((error, i)=> <Error key={i}>{error}</Error> )}
        
      <Form 
        method="POST"
        action="/proovedores/nuevo"
      >
        <Formulario
          nombre = 'Proovedor'
        />
        <input
          type="submit"
          className="mt-5 w-full bg-blue-900 p-3 uppercase font-bold text-white text-lg"
          value="Registrar proovedor"
        />
      </Form>
        
        </div>
    </>
  )
}
