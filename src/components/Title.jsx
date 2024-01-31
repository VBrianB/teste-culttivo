import styled from "styled-components"
import DrizzlingImage from '../assets/weather_icon_example_drizzling.png'
import HumitImage from '../assets/weather_icon_example_humid.png'

const TitleSection = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20%;
    background: rgb(73,89,142);
    background: linear-gradient(90deg, rgba(73,89,142,1) 0%, rgba(57,71,114,1) 48%, rgba(40,52,90,1) 100%);
    border-radius: 0% 0% 60% 60%;
    box-shadow: 0px 0px 32px 0px rgba(0,0,0,0.3);

    @media screen and (max-width:930px) {
        border-radius: 0% 0% 20% 20%;
    }
`
const TitleText = styled.h3`
    font-size: 32px;
    display: flex;
    align-items: center;
    gap: 8px;
    text-align: center;
    color: #fcfcfc;
    position: relative;
    font-weight: 500;

    @media screen and (max-width:930px) {
        font-size: 22px;
    }
    @media screen and (max-width:600px) {
        max-width: 80%;
    }
    @media screen and (max-width:400px) {
        max-width: 95%;
        font-size: 18px;
    }
`
const DrizzlingIcon = styled.img`
    max-width:84px;
    position: absolute;
    top: -40px;
    right: -60px;
`

const HumitIcon = styled.img`
    max-width:84px;
    position: absolute;
    top: 60px;
    left: -90px;
`

const Title = () => {
    return(
        <TitleSection>
            
            <TitleText> 
                Temperatura para <b>Varginha</b> nos próximos <b>7 dias.</b>
                <DrizzlingIcon src={DrizzlingImage} />
                {/* <HumitIcon src={HumitImage} /> */}
            </TitleText> 
        </TitleSection>
    )
}

export default Title;