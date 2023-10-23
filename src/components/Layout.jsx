import { Outlet, Link, useLocation } from "react-router-dom" 
import CarroDeCompras from "./CarroDeCompras"
import { ListaDeProductos } from "./ListaDeProductos"
import { useState } from "react"

export const Layout = () => {

    const [allProducts, setAllProducts] = useState([])
    const [total, setTotal] = useState(0)
    const [countProducts, setCountProducts] = useState(0)

    const location = useLocation()
    return (
    <>
    
    <div className="md:flex md:min-h-screen">
        <aside className="md:w-1/4 bg-blue-950 px-5 py-10">
            <h2 className="text-4xl font-black text-white text-center ">Proyecto - Uade </h2>
            <nav className="mt-10">
                <Link className={`${location.pathname === '/clientes/nuevo' ? 'text-slate-300' : 'text-white' } text-2xl block mt-2 hover:text-slate-300` } 
                        to='/clientes/nuevo'>Registrar cliente</Link>
                <Link className={`${location.pathname === '/clientes' ? 'text-slate-300' : 'text-white' } text-2xl block mt-1 hover:text-slate-300` }
                        to='/clientes'>Lista de clientes</Link>

                
                <Link className="text-2xl text-white hover:text-slate-300  block mt-6 " to='/productos'>Lista de productos</Link>

                <Link className="text-2xl text-white hover:text-slate-300  block mt-6 " to='/proovedores/nuevo'>Registrar proovedor</Link>
                <Link className="text-2xl text-white hover:text-slate-300  block " to='/proovedores'>Lista de proovedores</Link>
                
            </nav>
            
        </aside>
        
        <main className="md:w-3/4 p-10 md:h-screen overflow-scroll ">
            <CarroDeCompras
                allProducts = {allProducts}
                setAllProducts = {setAllProducts}
                total = {total}
                setTotal = {setTotal}
                countProducts = {countProducts}
                setCountProducts = {setCountProducts}
            />
            {location.pathname === '/productos' ? <ListaDeProductos
                allProducts = {allProducts}
                setAllProducts = {setAllProducts}
                total = {total}
                setTotal = {setTotal}
                countProducts = {countProducts}
                setCountProducts = {setCountProducts}
            /> : []}
            <Outlet/>
            
        </main>
        

        
    </div>
    </>
  )
}
