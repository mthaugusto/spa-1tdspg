import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Bloco de criação das rotas
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './routes/Home.jsx';
import Produtos from './routes/Produtos.jsx';
import EditarProdutos from './routes/EditarProdutos.jsx';
import Error from './routes/Error.jsx';


const router = createBrowserRouter(
  [ // path é o endereço. se path fosse '/home', teria que ter /home no final do localhost para acessar o elemento app
    {path: '/',  element : <App />,
    errorElement: <Error/>,
    children:[
        { path: '/', element : <Home/>},
        { path: '/produtos', element : <Produtos/>},
        { path: '/editar/produto/:id', element : <EditarProdutos/>},
      ]
  }
 ]
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
