
import { useNavigate, useActionData, Form, redirect } from "react-router-dom"
import Formulario from "../components/Formulario";
import Error from "../components/Error";
import { agregarCliente } from "../data/clientes";

export async function action ({request}) {
  const formData = await request.formData();

  const datos = Object.fromEntries(formData)
  const mail = formData.get('email')
  
  const errores = []
  if(Object.values(datos).includes('')){
    errores.push('Todos los campos son obligatorios')
  }

  let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
  if(!regex.test(mail)){
    errores.push('El email no es valido')
  }

  if(Object.keys(errores).length){
    return errores
  }

  await agregarCliente(datos)

  return redirect('/clientes')
}

export const NuevoCiente = () => {

  const navigate = useNavigate();
  const errores = useActionData();
  return (
    <>
      <h1 className="text-blue-900 font-black text-4xl">Formulario de Cliente</h1>
      <p className="mt-3">Llena los campos para registrarte </p>
      <div className="flex justify-end mt-2">
        <button
          className="bg-blue-900 text-white uppercase px-3 py-1 font-bold"
          onClick={()=> navigate('/clientes')}
        >
        Volver
        </button>
        
      </div>
      <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-10">
      {errores?.length && errores.map((error, i)=><Error key={i}>{error}</Error> )}  
      <Form 
        method="POST"
        action="/clientes/nuevo"
        noValidate
      >
        <Formulario
          nombre = 'Cliente'
        />
        <input
          type="submit"
          className="mt-5 w-full bg-blue-900 p-3 uppercase font-bold text-white text-lg"
          value="Registrar cliente"
        />
      </Form>
        
        </div>
    </>
  )
}
