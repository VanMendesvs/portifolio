import React from "react";
import Avatar from "./avatar.png"
import Linkedin from "./linkedin.png"
import Instagram from "./instagram.png"
import Github from "./github.png"
import * as S from "./InicioStyle.jsx"

function Inicio() {
    return(
        <S.Main>

                <img src={Avatar} alt="Avatar Vanessa"/>  
                  
                


                <section>

                <h1>Eu sou Vanessa bem-vind@s ao meu portifolio</h1> 
                
                <S.Redes>
                <a href="https://www.linkedin.com/in/vanessa-mendes-da-silva/" target="_blank">
                <img src={Linkedin} alt="Icone Linkedin"/>
                </a>

                <a href="https://github.com/VanMendesvs" target="_blank">
                <img src={Github} alt="Icone do GitHub"/>
                </a>

                <a href="https://www.instagram.com/mendessvan/" target="_blank">
                <img src={Instagram} alt="Icone Instagram"/>
                </a>
                </S.Redes>

                </section>
        
        </S.Main>
    )
}

export default Inicio