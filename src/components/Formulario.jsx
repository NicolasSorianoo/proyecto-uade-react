const Formulario = (props) => {
    return (
        <>
            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="nombre"
                >Nombre:</label>
                <input 
                    id="nombre"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder={"Nombre del " + props.nombre} 
                    name="nombre"
                    defaultValue={props.cliente?.nombre || props.proovedor?.nombre }
                />
            </div>
            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="email"
                >E-mail:</label>
                <input 
                    id="email"
                    type="email"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder={"Email del " + props.nombre}
                    name="email"
                    defaultValue={props.cliente?.email || props.proovedor?.email}
                />
            </div>

            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="telefono"
                >Teléfono:</label>
                <input 
                    id="telefono"
                    type="tel"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder={"Telefono del " + props.nombre}
                    name="telefono"
                    defaultValue={props.cliente?.telefono || props.proovedor?.telefono}
                />
            </div>

            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="notas"
                >Notas:</label>
                <textarea
                    as="textarea"
                    id="notas"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50 h-40 align-self"
                    placeholder={"Notas del " + props.nombre}
                    name="notas"
                    defaultValue={props.cliente?.notas || props.proovedor?.notas}
                />
            </div>
        </>
    )
}

export default Formulario