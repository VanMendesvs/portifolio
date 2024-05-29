import React from "react";
import Inicio from "../Inicio/Inicio.jsx"
import Sobre from "../Sobre/Sobre.jsx"
import Experiencia from "../Experiencia/Experiencia.jsx"
import Projeto from  "../Projetos/Projeto.jsx"
import * as S from "./NavegacaoStyle.jsx"


import {BrowserRouter, Routes , Route, Link } from "react-router-dom"

export default function Navegacao (){
    return (
        <BrowserRouter>
        <nav>
            <S.Ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/Sobre"> Sobre </Link></li>
                <li><Link to="/Experiencias"> Experiências </Link></li>
                <li><Link to="/Projeto">Projetos</Link></li>
        </S.Ul>
        </nav>

        <Routes>
            {/* patch (caminho) :Configura os dois, LINK TO= e PATH= */}
            {/* element - configura para qual componente quero ir. */}
            <Route path="/" element={ <Inicio/> } />
            <Route path="/Sobre" element={ <Sobre/> }/>
            <Route path="/Experiencias" element = { <Experiencia/>}/>
            <Route path="/Projeto" element = {<Projeto />}/>
        </Routes>
        </BrowserRouter>
    )
}