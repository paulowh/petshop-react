import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { api, busca } from '../../../api/api';
import '../components/tabela.css';
import { Button } from '@mui/material';

const ListaCatAdmin = () => {
    
    const [categorias, setCategorias] = useState([]);
    useEffect(() => {
        busca(`/categorias`, setCategorias)
    }, [])

    const excluir = (CategoriaDel) => {
        api.delete(`categorias/${CategoriaDel.id}/`)
            .then(() => {
                const listaCategorias = categorias.filter( categoria => categoria.id !== CategoriaDel.id)
                setCategorias([...listaCategorias])
            })
    } 


    return (
        <section className="container">
            <table className="tabela">
                <thead>
                    <tr>
                        <th className="tabela__coluna--g">Categoria</th>
                        <th colSpan="3" className="tabela__coluna--p tabela__alinhamento--direita">
                            <Link to="/admin/NovaCategoria">
                                <Button
                                    type='submit'
                                    variant='contained'
                                    fullWidth
                                    sx={{ marginTop: 1 }}
                                >
                                    Nova Categoria

                                </Button>
                            </Link>
                        </th>
                    </tr>
                </thead>
                <tbody >
                    {
                        categorias.map((categoria) => (
                            <tr key={categoria.id}>
                                <td className="tabela__coluna--m">
                                    <Link to={`/categoria/${categoria.id}`}>
                                        {categoria.nome}
                                    </Link>
                                </td>
                                <td colSpan="2" className="tabela__coluna--m tabela__alinhamento--direita">
                                    <Link to={`/Admin/${categoria.id}`}>
                                        <Button
                                            type='submit'
                                            variant='contained'
                                            color='warning'
                                            align="right"
                                        >
                                            Editar
                                        </Button>
                                    </Link>
                                    <Link to={`/Admin`}>
                                        <Button
                                            type='submit'
                                            variant='contained'
                                            color='error'
                                            align='right'
                                            sx={{ margin: '0 0.25rem'}}
                                            onClick={() => excluir(categoria)}
                                        >
                                            Excluir
                                        </Button>
                                    </Link>
                                </td>
                                <td>
                                <Link to={`/Admin/categoria/${categoria.id}`}>
                                        <Button
                                            type='submit'
                                            variant='outlined'
                                            color='primary'
                                            align='right'
                                            sx={{ margin: '0 0.25rem'}}
                                           
                                        >
                                            SubCategoria
                                        </Button>
                                    </Link>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </section>
    )
}

export default ListaCatAdmin