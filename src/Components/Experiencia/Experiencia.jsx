import React from "react";
import HTML from "./html.png"
import CSS from "./css.png"
import JS from "./js.png"
import REACT from "./react.png"
import * as S from "./StyleExperiencia"

function Experiencia() {
    return(
        <S.Main>
            <section>



            
            <S.SectionEst>
                <h2>ESTUDOS</h2>
                <S.SectionCard>
                    <div>
                        <h2>Analise e Desenvolvimento de Sistemas</h2>
                        <h3>Universidade de Mogi das Cruzes</h3>
                        <h3>Janeiro/2011 a Dezembro/2014</h3>
                    </div>
                    <div>
                        <h2>Desenvolvimento FRONT-END</h2>
                        <h3>Vai na WEB</h3>
                        <h3>Agosto/2023 a Maio/2024</h3>
                    </div>
                </S.SectionCard>
            </S.SectionEst>

            <S.SectionHab>
                <h2>HABILIDADES</h2>
                <S.SectionCard2>
                    <div>
                        <h3>HTML</h3>
                        <img src={HTML} alt="Logo HTML"/>
                    </div>

                    <div>
                        <h3>CSS</h3>
                        <img src={CSS} alt="Logo CSS"/>
                    </div>

                    <div>
                        <h3>JS</h3>
                        <img src={JS} alt="Logo do JavaScript"/>
                    </div>
                    
                    <div>
                        <h3>REACT</h3>
                        <img src={REACT} alt="Logo do React"/>
                    </div>
                </S.SectionCard2>
            </S.SectionHab>

        <S.SectionPro>
        <h2>PROFISSIONAL</h2>
        <section>
          <S.SectionCard3>
            <h2>Analista de Suporte Operações</h2>
            <h3> Comunicação assertiva/ Habilidades analíticas/ Rede de computadores, Relatórios e análises/ Sistemas operacionais,Atendimento ao cliente /Resolução de problema /Trabalho em equipe /Solução de problemas técnicosS / Microsoft Outlook / Capacidade de organização </h3>
        </S.SectionCard3>
        </section>
      </S.SectionPro>




                </section>
        </S.Main>
    )
}

export default Experiencia