import { productos } from "../data/dataProductos"
import '../styles.css'


export const ListaDeProductos = ({allProducts, setAllProducts, countProducts, setCountProducts, total, setTotal}) => {

    const addProduct = (producto) => {

        if(allProducts.find(item => item.id === producto.id)){

            const productos = allProducts.map(item => item.id === producto.id ? {...item, cantidad: item.cantidad +1}: item)

            setCountProducts(countProducts + producto.cantidad)
            setTotal(total + producto.precio * producto.cantidad)

            return setAllProducts([...productos])
        }
        
        setTotal(total + producto.precio * producto.cantidad)
        setCountProducts(countProducts + producto.cantidad)
        setAllProducts([...allProducts, producto])
    }
    


    return(
        <>
        <h1 className="text-blue-900 font-black text-4xl mb-6">Tienda</h1>
        
        <div className="container-items">
            {productos.map(producto => (
                <div className="item" key={producto.id}>
                <figure>
				<img
					src={producto.img}
					alt={producto.nombreProducto}
				/>
				</figure>
				<div className="info-product">
					<h2 className="name-product">{producto.nombreProducto}</h2>
					<p className="price">${producto.precio}</p>
					<button className="btn-add-cart" onClick={()=> {addProduct(producto)}}>Añadir al carrito</button>
				</div>
                </div>
            ))}
        </div>
        </>
    
    
    )
}
