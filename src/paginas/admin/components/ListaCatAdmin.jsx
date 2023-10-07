import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { busca } from '../../../api/api';
import '../components/tabela.css';
import { Button } from '@mui/material';

const ListaCatAdmin = () => {
    const [categorias, setCategorias] = useState([]);
    useEffect(() => {
        busca(`/categorias`, setCategorias)
    }, [])

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
                                    sx={{marginTop: 1}}
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
                                <td></td>
                                <td></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </section>
    )
}

export default ListaCatAdmin