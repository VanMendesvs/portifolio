import React from "react";
import Proj1 from "./assets/Proj1.png"
import Proj2 from "./assets/Proj2.png"
import Proj3 from "./assets/Proj3.png"
import Proj4 from "./assets/Proj4.png"
import Proj5 from "./assets/Proj5.png"
import Proj6 from "./assets/Proj6.png"
import Proj7 from "./assets/Proj7.png"

import {useState, useEffect} from "react";
import {Swiper, SwiperSlide} from 'swiper/react'


import * as S from "./StyleProjeto.jsx"

function Projeto() {

const [slidePerview, setSlidePerview] = useState(2)

    const desafios = [
        {imagem: Proj1, descricao:"Projeto Incial HTML"},
        {imagem: Proj2, descricao:"Projeto Lojinha CSS e HTML"},
        {imagem: Proj3, descricao:"Projeto The Witcher HTML/CSS/ FlexBox"},
        {imagem: Proj4, descricao:"Desafio Modulo 1 HTML/CSS/ FlexBox e Responsividade"},
        {imagem: Proj5, descricao:"Projeto Cartonn React, MAP, styled-components, useEffect,filter"},
        {imagem: Proj6, descricao:"Projeto Patrocinadores criado com DOM, useEffect, useState"},
        {imagem: Proj7, descricao:"Projeto criando uma API de filmes"}
    ]

    useEffect(() => {
        function handlerResize(){
            if(window.innerWidth < 720){
                setSlidePerview(1);
        }else{  
            setSlidePerview(2);
        }
        }

        handlerResize();

        window.addEventListener("resize", handlerResize)

        return () => {
            window.removeEventListener("resize", handlerResize)

        }
    },[])


    return(
        <S.Main>
            <h1> Meus Projetos</h1>
            <Swiper
                slidesPerView={slidePerview}
                pagination={{clickable: true}}
                navigation
            
            >
                {desafios.map( (item) => (
                        <SwiperSlide key={item.imagem}>
                            <img src={item.imagem}
                             alt= "Slider"
                             className="slide-item"/>
                        </SwiperSlide>
                ))}
            </Swiper>
        </S.Main>
    )
}

export default Projeto