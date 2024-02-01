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
        font-size: 24px;
        max-width: 50%;
        text-align: center;
    }
    b{
        color:black;
    }

    @media screen and (max-width: 500px) {
        img{
        max-width: 220px;
    }
    
    span{
        font-size: 16px;
        max-width: 90%;
        text-align: center;
    }
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