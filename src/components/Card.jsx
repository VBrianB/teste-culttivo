import {styled, keyframes} from "styled-components"
import 'boxicons'
import { useEffect, useState } from "react"

const showDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-50px);
  }

  to {
    opacity: 1;
    transform: translateY(0px);
  }
`;

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    border-radius: 20px;
    padding: 20px;
    border: 1px solid #00000024;
    height: 100%;
    animation: ${showDown} .8s ease;
    max-height: 570px;
    height: 100%;
`
const TopCardData = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    img{
        max-width: 90px;
        padding: 10px;
    }   
    
    @media screen and (max-width:1300px) {
        img{
            max-width: 70px;
        }
    }
`
const TimeData = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 20px;
    font-weight: 500;
    color: #8b8b8b;
    padding: 20px;

    b{
        color: #636363;
    }

    @media screen and (max-width:1300px) {
        font-size: 16px;
    }
`
const AlertMessage = styled.div`
    background-color: #e7e7e7;
    color: #333;
    border-radius: 6px;
    padding: 10px;
    font-size: 14px; 
    text-align: left;
    max-width: 320px;
    min-height: 72px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 20px;

    @media screen and (max-width:1300px) {
        font-size: 12px; 
        max-width: 270px;
    }
`
const WeatherDataArea = styled.div`
    display: flex;
    flex-direction: column;
`
const WeatherDetails = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    padding: 10px;
    font-size: 14px;
    border-bottom: 1px solid #33333329;
    span{
        width: 40%;
        font-weight: 500;
        color: #494949;
    }
    div{
        display: flex;
        width: 60%;
    }
    @media screen and (max-width:1300px) {
        font-size: 10px;
    }
`
const WeatherData = styled.p`
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 0 5px;
    padding: 8px;
    border-radius:6px;
    font-size: 12px;

    background-color:  ${props => 
        props.$tipoValorClima === 'tempMin' ? '#bad2ff' 
        : props.$tipoValorClima === 'tempMax' ? '#ffd9d9'
        : props.$tipoValorClima ==='umidade' ? '#e4fcf9'
        : props.$tipoValorClima === 'sol' ? '#fff0d2'
        : props.$tipoValorClima === 'chuva' && '#eeeeee'};

    color: ${props => 
        props.$tipoValorClima === 'tempMin' ? '#234c97' 
        : props.$tipoValorClima === 'tempMax' ? '#cc2222'
        : props.$tipoValorClima ==='umidade' ? '#179689'
        : props.$tipoValorClima === 'sol' ? '#c58e20'
        : props.$tipoValorClima === 'chuva' && '#5c5c5c'};

    border-left: 5px solid ${props => 
        props.$tipoValorClima === 'tempMin' ? '#234c97' 
        : props.$tipoValorClima === 'tempMax' ? '#cc2222'
        : props.$tipoValorClima ==='umidade' ? '#179689'
        : props.$tipoValorClima === 'sol' ? '#c58e20'
        : props.$tipoValorClima === 'chuva' && '#585858'};

    @media screen and (max-width:1300px) {
            font-size: 10px;
        }
`
const MinMaxTempAlert = styled.div`
   display: flex;
   padding: 20px;
   align-items: center;
   gap: 10px;
   border-radius: 12px;
   margin-top: 12px;

   border: 1px solid ${props => 
        props.$alerta === 'min' ?  "#588ce0" 
        : props.$alerta === 'max' && "#cf522b"};

   background-color: ${props => 
        props.$alerta === "min" ? "#eef2f8" 
        : props.$alerta === 'max' && "#ffede8"};

   color: ${props => 
        props.$alerta ==="min" ? "#1d3c6d" 
        : props.$alerta ==="max" && "#9c3d20"};

    span {
        display: flex;
        justify-content: center;
        max-width: 240px;
        font-size: 12px;
    }

    @media screen and (max-width:1300px) {
        padding: 20px 0;
        font-size: 10px;
        gap: 0;
        justify-content: center;

        span{
            max-width: 230px;
        }
    }
`

const Card = ({ iconeNome, mediaTempMax, mediaTempMin, dataBrasil, dataOriginal, mensagemAlerta, 
temperaturaMin, temperaturaMax, umidadeMin, umidadeMax, nascerSol, porSol, chuva}) => {

    const [diaSemana, setDiaSemana] = useState()
    const [iconeImagem, setIconeImagem] = useState()

    useEffect(()=> {
       pegarNomeDia(dataOriginal.replace('-','/'), 'pt-BR')
       pegarIcone(iconeNome)
    },[])

    function pegarNomeDia(dia, localizacao) {
        var data = new Date(dia);
        setDiaSemana( data.toLocaleDateString(localizacao, { weekday: 'long'}) )       
    }

    const pegarIcone = async (nomeIcone) => {
        const resposta = await import(`../assets/weather_icons/${nomeIcone}.png`)
        setIconeImagem( resposta.default )
    }
    
    return(
        <CardContainer >
            <TopCardData> 
                <img src={iconeImagem} />
                <TimeData>
                    <span><b>{dataBrasil}</b></span>
                    <span>{diaSemana}</span>
                </TimeData>
            </TopCardData>
            <AlertMessage>
                {mensagemAlerta}
            </AlertMessage>
            <WeatherDataArea>
                <WeatherDetails>
                    <span>Temperatura: </span> 
                    <div>
                        <WeatherData $tipoValorClima={"tempMin"}>min: {temperaturaMin}º</WeatherData>
                        <WeatherData $tipoValorClima={"tempMax"}>max: {temperaturaMax}º</WeatherData>
                    </div>
                </WeatherDetails>
                <WeatherDetails>
                    <span>Umidade: </span> 
                    <div>
                        <WeatherData $tipoValorClima={"umidade"}>{umidadeMin}% - {umidadeMax}% </WeatherData>
                    </div>
                </WeatherDetails>
                <WeatherDetails>
                    <span>Sol: </span> 
                    <div>
                        <WeatherData $tipoValorClima={"sol"}>{nascerSol} - {porSol} </WeatherData>
                    </div>
                </WeatherDetails>
                <WeatherDetails>
                    <span>Chuva: </span> 
                    <div>
                        <WeatherData $tipoValorClima={"chuva"}>{chuva}% </WeatherData>
                    </div>
                </WeatherDetails>
            </WeatherDataArea>
            {temperaturaMax > mediaTempMax &&
                <MinMaxTempAlert $alerta={"max"}>
                    <box-icon name='error' color="#c74c2e" size="sm"></box-icon>
                    <span>Temperatura máxima deste dia será superior a máxima média do período.</span>
                </MinMaxTempAlert>
            }
            {temperaturaMin < mediaTempMin &&
                <MinMaxTempAlert $alerta={"min"}>
                    <box-icon name='error-circle' color="#588ce0" size="sm" />
                    <span>Temperatura mínima deste dia será inferior a mínima média do período.</span>
                </MinMaxTempAlert>
            }
        </CardContainer>
    )
}

export default Card