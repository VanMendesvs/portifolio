import React from "react";
import Inicio from "./Inicio.jsx";
import Sobre from "./Sobre";
import Projeto from "./Projetos";


import {BrowserRouter, Routes , Route, Link } from "react-router-dom"

export default function Navegacao (){
    return (
        <BrowserRouter>
        <nav>
            <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/Sobre"> Sobre </Link></li>
                <li><Link to="/Projetos"> Projetos </Link></li>
        </ul>
        </nav>

        <Routes>
            {/* patch (caminho) :Configura os dois, LINK TO= e PATH= */}
            {/* element - configura para qual componente quero ir. */}
            <Route path="/" element={ <Inicio/> } />
            <Route path="/Sobre" element={ <Sobre/> }/>
            <Route path="/Projetos" element = { <Projeto/>}/>
        </Routes>
        </BrowserRouter>
    )
}