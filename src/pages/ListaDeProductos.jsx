export function loader () {

    return 'desde loader productos'
}

export const ListaDeProductos = () => {
    return (
        <>
            <h1 className="text-blue-900 font-black text-4xl">Productos</h1>
            <p className="mt-3">Administra tus productos</p>
        </>
    )
}
