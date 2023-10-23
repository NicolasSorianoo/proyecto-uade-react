import { Form, useNavigate, useLoaderData, useActionData, redirect } from "react-router-dom";
import { obtenerClientes, actualizarCliente } from "../data/clientes";
import Formulario from "../components/Formulario";
import Error from "../components/Error";




export async function loader({ params }) {
  const cliente = await obtenerClientes(params.clienteId);
  if (Object.values(cliente).length === 0) {
    throw new Response("", {
      status: 404,
      statusText: "No hay resultados",
    });
  }
  console.log(cliente);
  return cliente;
}

export async function action({request, params}) {

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

    // Actualizar cliente
    await actualizarCliente(params.clienteId, datos)
    return redirect('/clientes')
}


function EditarCliente() {
  const cliente = useLoaderData()
  const navigate = useNavigate()
  const errores = useActionData()
  console.log(cliente) 

  return (
    <>
      <h1 className="text-blue-900 font-black text-4xl">
        Editar Cliente
      </h1>
      <p className="mt-3">Puedes modificar los campos del cliente </p>
      <div className="flex justify-end">
        <button
          className="bg-blue-900 text-white uppercase px-3 py-1 font-bold"
          onClick={() => navigate("/clientes")}
        >
          Volver
        </button>
      </div>
      <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-10">
         {errores?.length && errores.map((error, i) => <Error key={i}>{error}</Error>)}  
        <Form method="post"  noValidate>

          <Formulario  cliente = {cliente} />
          <input
            type="submit"
            className="mt-5 w-full bg-blue-900 p-3 uppercase font-bold text-white text-lg"
            value="Guardar cambios"
          />
        </Form>
      </div>
    </>
  );
}

export default EditarCliente;
