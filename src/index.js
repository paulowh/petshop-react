import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './paginas/home';
import Sobre from './paginas/sobre';
import Pagina404 from './paginas/pagina404';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "sobre",
    element: <Sobre />
  },
  {
    path: "*",
    element: <Pagina404 />
  }
  
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
