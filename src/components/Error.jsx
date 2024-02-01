import styled from "styled-components"
import ErrorImage from '../assets/error_image.png'

const ErrorMessage = styled.main`
    width: 100%;
    height: 75%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    img{
        max-width: 320px;
    }
    span{
        margin-bottom: 220px;
        font-size: 24px;
        max-width: 50%;
        text-align: center;
    }
    
    b{
        color:black;
    }
`


const Error = () => {
    return(
        <ErrorMessage>
            <img src={ErrorImage} alt="" />
            <span> <b>Oh não!</b> Parece que tivemos algum problema interno, já estamos consertando, tente novamente mais tarde.</span>
        </ErrorMessage>
    )
}

export default Error;