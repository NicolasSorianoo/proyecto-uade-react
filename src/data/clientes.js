
export async function obtenerCliente (){
    const respuesta = await fetch(import.meta.env.VITE_API_URL_CLIENTES)
    const resultado = await respuesta.json()
    
    return resultado
}

export async function obtenerClientes (id){
    const respuesta = await fetch(`${import.meta.env.VITE_API_URL_CLIENTES}/${id}`)
    const resultado = await respuesta.json()
    
    return resultado
}

export async function agregarCliente(datos){
    try {
        const respuesta = await fetch(import.meta.env.VITE_API_URL_CLIENTES,{
            method: 'POST',
            body: JSON.stringify(datos),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        await respuesta.json()
    } catch (error) {
        console.log(error)
    }
}

export async function actualizarCliente(id, datos){
    try {
        const respuesta = await fetch(`${import.meta.env.VITE_API_URL_CLIENTES}/${id}`,{
            method: 'put',
            body: JSON.stringify(datos),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        await respuesta.json()
    } catch (error) {
        console.log(error)
    }
}

export async function eliminarCliente(id) {

    try {
        const respuesta = await fetch(`${import.meta.env.VITE_API_URL_CLIENTES}/${id}`,{
            method: 'delete',
           
        })
        await respuesta.json()
    } catch (error) {
        console.log(error)
    }
}