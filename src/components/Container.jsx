import styled from "styled-components"
import Title from "./Title"
import CarouselContainer from "./Carousel"
import { useEffect , useState} from "react"
import Clima from "../services/clima"

const MainContainer = styled.main`
    height: 100%;
    background-color: #fcfcfc;
`

const Container = () => {

    const [nomeCidade, setNomeCidade] = useState('')
    const [listaPrevisoes, setListaPrevisoes] = useState([])
    const [carregamento, setCarregamento] = useState(true)

    useEffect(()=>{
        Clima.pegarClima(6754)
        .then( resposta => { 
            setNomeCidade(resposta.name); 
            setListaPrevisoes(resposta.data)
            setCarregamento(false)
        })
    },[])
    
    return(
        <MainContainer>
            {listaPrevisoes !== undefined &&
                <>
                    <Title nomeCidade={nomeCidade} lista={listaPrevisoes}/>
                    <CarouselContainer lista={listaPrevisoes}/>
                </>
            }
        </MainContainer>
    )
}

export default Container;