import { useLoaderData } from "react-router-dom"
import { Tabla } from "../components/Tabla";
import { obtenerCliente } from "../data/clientes";

export function loader() {
    const data = obtenerCliente()

    return data
}

export const ListaDeClientes = () => {

    const data = useLoaderData()
    

    return (
        <>
            <h1 className="text-blue-900 font-black text-4xl">Clientes</h1>
            <p className="mt-3">Administra tus clientes </p>
            {data.length ? (
                <Tabla
                nombre = 'Clientes'
                data = {data}/>    
            ) : (
                <p className="text-4xl mt-6 text-center font-bold">No hay clientes</p>
            )}
        </>
    )
}
