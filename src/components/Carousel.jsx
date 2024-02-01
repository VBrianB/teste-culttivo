import styled from "styled-components"
import Card from "./Card"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useEffect, useState } from "react";
import Clima from "../services/clima";
import { memo } from "react";

const CarouselSection = styled.section`
    width: 100%;
    height: 100%;
`
const CarouselItemContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    height: 100%;

    @media screen and (max-width:800px) {
        flex-direction: column;
        margin-top: 120px;
    }
`

const Wrapper = styled.div`
    width: 100%;
    margin-top: 5%;
    transform: translateY(-5%);
    position: relative;
    height: 100%;
`
const CuustomCarouselButtonLeft = styled.button`
    background-color: #0d1a4e;
    width: 55px;
    height: 55px;
    border: none;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    z-index: 99;
    top: 40%;
    left: 190px;
    transform: translateY(-40%);

    @media screen and (max-width: 1700px){
        left: 20px;
    }
`

const CuustomCarouselButtonRight = styled.button`
    background-color: #0d1a4e;
    width: 55px;
    height: 55px;
    border: none;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    z-index: 99;
    top: 40%;
    right: 190px;
    transform: translateY(-40%);
    
    @media screen and (max-width: 1700px){
        right: 20px;
    }
`

const CarouselContainer = ({ lista }) => {

    const [mediaTempMin, setMediaTempMin] = useState()
    const [mediaTempMax, setMediaTempMax] = useState()

    useEffect(()=> {
        calcularMediaTempMax()
        calcularMediaTempMin()
    })

    const separar = (itens, maximo) => {
        return itens.reduce((acumulador, item, indice) => {
          const grupo = Math.floor(indice / maximo);
          acumulador[grupo] = [...(acumulador[grupo] || []), item];
          return acumulador;
        }, []);
      };
      
      function calcularMediaTempMax(){   
              const arrTemperaturaMax = []
              lista.map(item => {
                  const temperaturaMax = item.temperature?.max;
                  arrTemperaturaMax.push(temperaturaMax);
              })
              const somaTempMax = arrTemperaturaMax.reduce((acumulador, elemento) => acumulador + elemento, 0);
              const mediaTempMax = somaTempMax / arrTemperaturaMax.length;
              setMediaTempMax( mediaTempMax.toFixed(0))
      }

      function calcularMediaTempMin(){
        const arrTemperaturaMin = []
              lista.map(item => {
                  const temperaturaMin = item.temperature?.min;
                  arrTemperaturaMin.push(temperaturaMin);
              })
              const somaTempMin = arrTemperaturaMin.reduce((acumulador, elemento) => acumulador + elemento, 0);
              const mediaTempMin = somaTempMin / arrTemperaturaMin.length;
              setMediaTempMin( mediaTempMin.toFixed(0))
      }
      
    const grupoPrevisoes = separar(lista, 3)

    return(
        <Wrapper>
            <Carousel showArrows={true} showThumbs={false} showIndicators={false} showStatus={false} 
            renderArrowPrev={(onClickHandler, hasPrev, label) =>
                hasPrev && (
                    <CuustomCarouselButtonLeft $direcao='left' onClick={onClickHandler} > 
                            <box-icon name='left-arrow' type='solid' color='white' size='sm'></box-icon>
                    </CuustomCarouselButtonLeft>
                )
            }
            renderArrowNext={(onClickHandler, hasNext, label) =>
                hasNext && (
                    <CuustomCarouselButtonRight $direcao='right' onClick={onClickHandler} > 
                            <box-icon name='left-arrow' flip='horizontal' type='solid' color='white' size='sm'></box-icon>
                    </CuustomCarouselButtonRight>
                )
            }
            >
                <CarouselSection>
                    <CarouselItemContainer>
                    {grupoPrevisoes[0]?.map( previsao => { 
                            return(
                                <Card 
                                    key={previsao?.date_br}
                                    dataBrasil={previsao?.date_br}
                                    dataOriginal={previsao?.date}
                                    mensagemAlerta={previsao?.text_icon?.text?.pt}
                                    temperaturaMin={previsao?.temperature?.min}
                                    temperaturaMax={previsao?.temperature?.max}
                                    umidadeMin={previsao?.humidity?.min}
                                    umidadeMax={previsao?.humidity?.max}
                                    nascerSol={previsao?.sun?.sunrise?.substring(5, 0)}
                                    porSol={previsao?.sun?.sunset?.substring(5, 0)}
                                    chuva={previsao?.rain?.probability}
                                    mediaTempMax={mediaTempMax}
                                    mediaTempMin={mediaTempMin}
                                    iconeNome={previsao?.text_icon?.icon?.day}
                                />
                            )
                        })}
                    </CarouselItemContainer>
                </CarouselSection>
                <CarouselSection>
                    <CarouselItemContainer>
                    {grupoPrevisoes[1]?.map( previsao => { 
                            return(
                                <Card 
                                    key={previsao?.date_br}
                                    dataBrasil={previsao?.date_br}
                                    dataOriginal={previsao?.date}
                                    mensagemAlerta={previsao?.text_icon?.text?.pt}
                                    temperaturaMin={previsao?.temperature?.min}
                                    temperaturaMax={previsao?.temperature?.max}
                                    umidadeMin={previsao?.humidity?.min}
                                    umidadeMax={previsao?.humidity?.max}
                                    nascerSol={previsao?.sun?.sunrise?.substring(5, 0)}
                                    porSol={previsao?.sun?.sunset?.substring(5, 0)}
                                    chuva={previsao?.rain?.probability}
                                    mediaTempMax={mediaTempMax}
                                    mediaTempMin={mediaTempMin}
                                    iconeNome={previsao?.text_icon?.icon?.day}
                                />
                            )
                        })}
                    </CarouselItemContainer>
                </CarouselSection>
                <CarouselSection>
                    <CarouselItemContainer>
                    {grupoPrevisoes[2]?.map( previsao => { 
                            return(
                                <Card 
                                    key={previsao?.date_br}
                                    dataBrasil={previsao?.date_br}
                                    dataOriginal={previsao?.date}
                                    mensagemAlerta={previsao?.text_icon?.text?.pt}
                                    temperaturaMin={previsao?.temperature?.min}
                                    temperaturaMax={previsao?.temperature?.max}
                                    umidadeMin={previsao?.humidity?.min}
                                    umidadeMax={previsao?.humidity?.max}
                                    nascerSol={previsao?.sun?.sunrise?.substring(5, 0)}
                                    porSol={previsao?.sun?.sunset?.substring(5, 0)}
                                    chuva={previsao?.rain?.probability}
                                    mediaTempMax={mediaTempMax}
                                    mediaTempMin={mediaTempMin}
                                    iconeNome={previsao?.text_icon?.icon?.day}
                                />
                            )
                        })}
                    </CarouselItemContainer>
                </CarouselSection>
            </Carousel>
        </Wrapper>
    )
}

export default CarouselContainer;