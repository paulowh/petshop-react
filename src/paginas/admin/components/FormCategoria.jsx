import React, { useState } from 'react'
import { Button, TextField } from '@mui/material'
import axios from 'axios'
import { api } from '../../../api/api'
import { useNavigate } from "react-router-dom";

const FormCategoria = () => {
    const navigate = useNavigate();

    const [nomeCategoria, setNomeCategoria] = useState('')
    
    const CadCategoria = (evento) => {
        evento.preventDefault()

        console.log('Os dados vão para a API? quais: ')
        console.log(nomeCategoria)

        api.post(`/categorias`, {
            id: nomeCategoria,
            nome: nomeCategoria,
            subcategorias: []

        }).then(() => { //se a requisição der certo
            alert('Sucesso !')
            navigate('/admin')

        })
        
        // axios.post(`http://localhost:5000/categorias`, {
        //     id: nomeCategoria,
        //     nome: nomeCategoria,
        //     subcategorias: []

        // }).then(() => { //se a requisição der certo
        //     alert('Sucesso !!!')
        //     window.location.href = '/admin'
        // })
    }

    return (
        <main className="container flex flex--centro">
            <article className="cartao post">
                <h2 className="titulo-pagina">Cadastro de Categorias</h2>
                <br />
                <form onSubmit={CadCategoria}>
                    <TextField
                        value={nomeCategoria}
                        onChange={evento => setNomeCategoria(evento.target.value)}
                        id="standard-basic"
                        label="Categoria"
                        variant="filled"
                        fullWidth
                        required
                    />
                    <br />
                    <Button
                        type="submit"
                        variant="contained"
                        sx={{ marginTop: 1 }}
                        fullWidth
                    >
                        Cadastrar
                    </Button>
                </form>
            </article>
        </main>

    )
}

export default FormCategoria