import styled from "styled-components"
import Title from "./Title"
import CarouselContainer from "./Carousel"
import { useEffect , useState} from "react"
import Clima from "../services/clima"
import Error from "./Error"

const MainContainer = styled.main`
    height: 100%;
    background-color: #fcfcfc;
`

const Container = () => {

    const [listaPrevisoes, setListaPrevisoes] = useState([])
    const [alertaErro, setAlertaErro] = useState(false)

    useEffect(()=>{
        Clima.pegarClima(6754)
        .then( resposta => { 
            setListaPrevisoes(resposta.data)
        })
        .catch( error => { 
            console.error(error);
            setAlertaErro(true)
        });
    },[])
    
    return(
        <MainContainer>
            <Title/>
            {!alertaErro ?
                <>
                    <CarouselContainer lista={listaPrevisoes}/>
                </>
                :
                <>
                    <Error />
                </>
            }
        </MainContainer>
    )
}

export default Container;