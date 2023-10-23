import { useLoaderData } from "react-router-dom";
import { Tabla } from "../components/Tabla";
import { agregarProovedores } from "../data/proovedores";

export function loader () {

    const data = agregarProovedores()
    return data
}

export const ListaDeProovedores = () => {
    const data = useLoaderData()
    return (
        <>
            <h1 className="text-blue-900 font-black text-4xl">Proovedores</h1>
            <p className="mt-3">Administra tus proovedores</p>
            {data.length ? (
                <Tabla 
                nombre = 'Proovedores'
                data = {data}/>
            ):(
                <p className="text-4xl text-center p-2">No hay proovedores</p>
            )}

        </>
    )
}