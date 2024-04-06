import React from "react";
import Perfil from "./perfil.jpg"
import * as S from "./SobreStyle.jsx"

function Sobre() {
    return(
        <S.About>
            <S.Text>
            <h3>../about</h3>
            <h1>Sobre mim:</h1>

            <p>Atuante na área de tecnologia com mais de 10 anos de experiência em Tecnologia da Informação, suporte técnico a clientes e funcionários do sistemas bancários, gerenciamento e implantação de melhorias e inovações em ambientes críticos de tecnologia.</p>
            
            <p>Formada em Analise e Desenvolvimento de Sistemas (ADS) e atualmente estou em uma jornada de aprendizado que abrange experiência em programação HTML5/ CSS/ JavaScript/ React e Cloud AWS, assim com o objetivo de aperfeiçoar conhecimentos para desenvolvimento de uma carreira de destaque.</p>

            <p>Destacado dos itens técnicos, acredito também como necessário trazer um senso de melhoria, que motiva a buscar sempre um alto padrão e melhores entregas nas atividades de equipe. Além habilidades humanas que são muito valiosas como empatia, comunicação eficaz, atitude positiva, disposição para aprender agregando um ambiente de trabalho em equipe satisfatório para todos.</p>
            </S.Text>

            <S.Img src={Perfil} alt="Minha Foto"/>

        </S.About>
    )
}

export default Sobre