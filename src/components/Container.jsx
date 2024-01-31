import styled from "styled-components"
import Title from "./Title"
import Carousel from "./Carousel"

const MainContainer = styled.main`
    height: 100%;
    background-color: #fcfcfc;
`

const Container = () => {
    return(
        <MainContainer>
            <Title />
            <Carousel />
        </MainContainer>
    )
}

export default Container;