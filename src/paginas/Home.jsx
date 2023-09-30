import React from "react";
import ListPost from "../components/ListPost";
import ListaCategorias from "../components/ListaCategorias";

const Home = () => {
    return (
        <main>
            <div className="container">
                <h2 className="titulo-pagina">Sobre Meu amigo cão</h2>
            </div>
            <ListaCategorias />
            <ListPost url={'/posts/'} />
        </main>
    )
}

export default Home
