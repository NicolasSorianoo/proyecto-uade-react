import { useNavigate, Form, redirect } from "react-router-dom"
import { eliminarCliente } from "../data/clientes"
import { eliminarProovedor } from "../data/proovedores"

export async function action({params}){
    
    if (params.clienteId){
        await eliminarCliente(params.clienteId)
        redirect('/clientes')
        
    } else if(params.proovedoresId){
        eliminarProovedor(params.proovedoresId)
        
    }
    
    return redirect('/')
       
}

export const Tabla = (props) => {
  const navigate = useNavigate()
  return (
    <table className="w-full bg-white shadow mt-5 table-auto">
                    <thead className="bg-blue-900 text-white">
                        <tr>
                            <th className="p-2">{props.nombre}</th>
                            <th className="p-2">Contacto</th>
                            <th className="p-2">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.data.map((elemento, index) => (
                            <tr key={index} className='border-b '>
                                <td className='p-6'>
                                    <p className='text-gray-800 uppercase font-bold'>Nombre:</p>
                                    {elemento.nombre}
                                </td>

                                <td className='p-6 '>
                                    <p className='text-gray-600'><span className='text-gray-800 uppercase font-bold'>Email: </span>{elemento.email}</p>
                                    <p className='text-gray-600'><span className='text-gray-800 uppercase font-bold'>Tel: </span>{elemento.telefono}</p>
                                </td>

                                <td className='p-6 flex gap-4'>
                                    <button 
                                        type='button'
                                        className='text-blue-900 hover:text-blue-700 uppercase font-bold text-1xl'
                                        onClick={() => navigate(`/${props.nombre}/${elemento.id}/editar`)}
                                    >
                                        Editar
                                    </button>
                                    <Form 
                                        method="post"
                                        action={`/${props.nombre}/${elemento.id}/eliminar`}
                                        onSubmit={(e) => {
                                            if (!confirm('¿Desea eliminar?')) {
                                                e.preventDefault()
                                            }
                                        }}
                                    >
                                        <button 
                                            type='submit'
                                            className='text-red-600 hover:text-red-500 uppercase font-bold text-1xl'
                                        >
                                            Eliminar
                                        </button>
                                    </Form>
                                    
                                </td>
                                
                            </tr>
                        ))}
                    </tbody>    
                </table>
  )
}
