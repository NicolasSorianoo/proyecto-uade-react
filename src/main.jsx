import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import './index.css'

import { Layout } from './components/Layout'
//secciones//
import { NuevoCiente, action as nuevoClienteAction } from './pages/NuevoCiente'

import { Nuevoproovedor, action as nuevoProovedorAction } from './pages/Nuevoproovedor'
//Listas//
import { ListaDeClientes, loader as clientesLoader } from './pages/ListaDeClientes'
// import { ListaDeProductos, loader as productosLoader } from './pages/ListaDeProductos'
import { ListaDeProovedores, loader as proovedoresLoader } from './pages/ListaDeProovedores'
//Editar//
import EditarCliente, {loader as editarClienteLoader, action as editarClienteAction} from './pages/EditarCliente'
import EditarProovedor, {loader as editarProovedorLoader, action as editarProovedorAction} from './pages/EditarProovedor'
//Eliminar//
import {action as eliminarElementoAction }  from './components/Tabla' 


const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children: [
      //seccion de clientes
      {
        path:'/clientes',
        element:<ListaDeClientes/>, 
        loader: clientesLoader,
      },
      {
        path:'/clientes/nuevo',
        element: <NuevoCiente/>,
        action: nuevoClienteAction
      },
      {
        path:'/clientes/:clienteId/editar',
        element: <EditarCliente/>,
        loader: editarClienteLoader,
        action: editarClienteAction
      },
      {
        path: '/clientes/:clienteId/eliminar',
        action: eliminarElementoAction
      },
      //seccion de productos
      {
        path:'/productos',
      },
      
      //seccion de proovedores 
      {
        path: '/proovedores',
        element:<ListaDeProovedores/>,
        loader: proovedoresLoader
      },
      {
        path:'/proovedores/nuevo',
        element: <Nuevoproovedor/>,
        action: nuevoProovedorAction
      },
      {
        path:'/proovedores/:proovedoresId/editar',
        element: <EditarProovedor/>,
        loader: editarProovedorLoader,
        action: editarProovedorAction 
      },
      {
        path: '/proovedores/:proovedoresId/eliminar',
        action: eliminarElementoAction
      }
  ]
  }])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
