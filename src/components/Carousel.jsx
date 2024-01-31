import styled from "styled-components"
import Card from "./Card"

const CarouselSection = styled.section`
    width: 100%;
    height: 75%;
    display: flex;
`

const Carousel = () => {
    return(
        <CarouselSection>
            <Card tipoAlerta={'min'} />
        </CarouselSection>
    )
}

export default Carousel;