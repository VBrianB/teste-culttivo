import styled from "styled-components"
import Title from "./Titulo"

const MainContainer = styled.main`
    height: 100%;
    background-color: #fcfcfc;
`

const Container = () => {
    return(
        <MainContainer>
            <Title />
        </MainContainer>
    )
}

export default Container;