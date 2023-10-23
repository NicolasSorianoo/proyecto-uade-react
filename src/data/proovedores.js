export async function agregarProovedores () {

    const respuesta = await fetch(import.meta.env.VITE_API_URL_PROOVEDORES)
    const resultado = await respuesta.json()

    return resultado
}

export async function agregarProovedores2 (id) {

    const respuesta = await fetch(`${import.meta.env.VITE_API_URL_PROOVEDORES}/${id}`)
    const resultado = await respuesta.json()

    return resultado
}

export async function obtenerProovedor(datos) {

    try {
        const respuesta = await fetch(import.meta.env.VITE_API_URL_PROOVEDORES,{
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

export async function actualizarProovedor(id, datos){
    try {
        const respuesta = await fetch(`${import.meta.env.VITE_API_URL_PROOVEDORES}/${id}`,{
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

export async function eliminarProovedor(id) {

    try {
        const respuesta = await fetch(`${import.meta.env.VITE_API_URL_PROOVEDORES}/${id}`,{
            method: 'delete'
        })
        await respuesta.json()
    } catch (error) {
        console.log(error)
    }
}