import styled from "styled-components"
import 'boxicons'
import DrizzlingImage from '../assets/weather_icon_example_drizzling.png'

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    border-radius: 20px;
    padding: 20px;
    width: max-content;
    height: max-content;
    box-shadow: 0px 24px 32px 0px #0000003b;
    border: 1px solid #00000024;
`

const TopCardData = styled.div`
    display: flex;
    align-items: center;
    img{
        max-width: 90px;
        padding: 10px;
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
`
const AlertMessage = styled.div`
    background-color: #e7e7e7;
    color: #333;
    border-radius: 6px;
    padding: 10px;
    font-size: 14px; 
    text-align: left;
    max-width: 320px;
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
`
const WeatherData = styled.p`
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 0 5px;
    padding: 8px;
    border-radius:6px;

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

`

const Card = ({ tipoAlerta }) => {
    return(
        <CardContainer>
            <TopCardData> 
                <img src={DrizzlingImage} alt="" />
                <TimeData>
                    <span><b>31/01/2024</b></span>
                    <span>Quarta-feira</span>
                </TimeData>
            </TopCardData>
            <AlertMessage>
                Uma frente fria permanece semi-estacionária entre MG e BA, 
                deixando o tempo chuvoso nestas áreas.
            </AlertMessage>
            <WeatherDataArea>
                <WeatherDetails>
                    <span>Temperatura: </span> 
                    <div>
                        <WeatherData $tipoValorClima={"tempMin"}>min: 14º</WeatherData>
                        <WeatherData $tipoValorClima={"tempMax"}>max: 32º</WeatherData>
                    </div>
                </WeatherDetails>
                <WeatherDetails>
                    <span>Umidade: </span> 
                    <div>
                        <WeatherData $tipoValorClima={"umidade"}>28% - 81% </WeatherData>
                    </div>
                </WeatherDetails>
                <WeatherDetails>
                    <span>Sol: </span> 
                    <div>
                        <WeatherData $tipoValorClima={"sol"}>06:30 - 18:00 </WeatherData>
                    </div>
                </WeatherDetails>
                <WeatherDetails>
                    <span>Chuva: </span> 
                    <div>
                        <WeatherData $tipoValorClima={"chuva"}>28% </WeatherData>
                    </div>
                </WeatherDetails>
            </WeatherDataArea>
            {tipoAlerta == 'max' &&
                <MinMaxTempAlert $alerta={"max"}>
                    <box-icon name='error' color="#c74c2e" size="sm"></box-icon>
                    <span>Temperatura máxima deste dia será superior a máxima média do periodo.</span>
                </MinMaxTempAlert>
            }
            {tipoAlerta == 'min' &&
                <MinMaxTempAlert $alerta={"min"}>
                    <box-icon name='error-circle' color="#588ce0" size="sm" />
                    <span>Temperatura mínima deste dia será inferior a máxima média do periodo.</span>
                </MinMaxTempAlert>
            }
        </CardContainer>
    )
}

export default Card