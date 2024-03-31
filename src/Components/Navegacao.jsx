import React from "react";
import Inicio from "./Inicio/Inicio.jsx"
import Sobre from "./Sobre/Sobre.jsx"
import Projeto from "./Projetos/Projetos.jsx"
import Galeria from "./Galeria";
import * as S from "./Navegacao/NavegacaoStyle.jsx"


import {BrowserRouter, Routes , Route, Link } from "react-router-dom"

export default function Navegacao (){
    return (
        <BrowserRouter>
        <S.Nav>
            <S.Ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/Sobre"> Sobre </Link></li>
                <li><Link to="/Projetos"> Projetos </Link></li>
                <li><Link to="/Galeria">Galeria</Link></li>
        </S.Ul>
        </S.Nav>

        <Routes>
            {/* patch (caminho) :Configura os dois, LINK TO= e PATH= */}
            {/* element - configura para qual componente quero ir. */}
            <Route path="/" element={ <Inicio/> } />
            <Route path="/Sobre" element={ <Sobre/> }/>
            <Route path="/Projetos" element = { <Projeto/>}/>
            <Route path="/Galeria" element = {<Galeria />}/>
        </Routes>
        </BrowserRouter>
    )
}