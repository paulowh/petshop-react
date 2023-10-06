import React, { useEffect, useState } from 'react';
import '../assets/css/blog.css';
import { Link, Route, Routes, useParams } from 'react-router-dom';
import ListaCategorias from '../components/ListaCategorias';
import ListPost from '../components/ListPost';

import { busca } from '../api/api';
import SubCategorias from '../components/SubCategorias';


const Categoria = () => {
    const { id } = useParams()

    const [subcategorias, setSubCategorias] = useState([])

    useEffect(() => {
        busca(`/categorias/${id}`, (categoria) => {
            setSubCategorias(categoria.subcategorias)
        })
    }, [id])

    return (
        <>

            <div className='container'>
                <h2 className='titulo-pagina'>Pet Notícias</h2>
            </div>

            <ListaCategorias />

            <ul className="lista-categorias container flex">
                {
                    subcategorias.map((subcategoria) => (
                        <Link to={`/${subcategoria}`}>
                            <li className={`lista-categorias__categoria lista-categorias__categoria--${id}`} key={subcategoria}>
                                {subcategoria}
                            </li>
                        </Link>
                    ))
                }
            </ul>

            <Routes>
                <Route path={`/`} element={<ListPost url={`/posts?categoria=${id}`} />} />
                <Route path={`/:subcategoria`} element={<SubCategorias />} />
            </Routes>
        </>
    )
}

export default Categoria