import React from "react";
import ListPost from "../components/ListPost";

const Home = () => {
    return (
        <main>
            <div className="container">
                <h2 className="titulo-pagina">Sobre Meu amigo cão</h2>
            </div>
           <ListPost url={'/posts/'} />
        </main>
    )
}

export default Home
