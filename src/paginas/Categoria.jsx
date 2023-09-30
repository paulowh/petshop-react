import React from 'react';
import '../assets/css/blog.css';
import { Route, Routes, useParams } from 'react-router-dom';
import ListaCategorias from '../components/ListaCategorias';
import ListPost from '../components/ListPost';
import Home from './Home';


const Categoria = () => {
    const { id } = useParams()


    return (
        <>

            <div className='container'>
                <h2 className='titulo-pagina'>Pet Notícias</h2>
            </div>

            <ListaCategorias />

            <Routes>
                <Route path={`/`} element={<ListPost url={`/posts?categoria=${id}`}/>} />
            </Routes>
        </>
    )
}

export default Categoria