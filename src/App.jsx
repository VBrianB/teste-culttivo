import {styled, createGlobalStyle} from "styled-components"
import { useEffect , useState} from "react"
import Title from './components/Title'
import Footer from './components/Footer'
import CarouselContainer from './components/Carousel'
import Error from './components/Error'
import Clima from "./services/clima"

const GlobalStyle = createGlobalStyle`
  * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: 'Montserrat', sans-serif;
  }
  html, body, #root{
    background-color: #fcfcfc;
    position: relative;
    min-height: 100vh;
  }
  b{
    font-weight: 800;
    color: white;
  }
`
const App = () => {

    const [listaPrevisoes, setListaPrevisoes] = useState([])
    const [alertaErro, setAlertaErro] = useState(false)

    useEffect(()=>{
        Clima.pegarClima(6754)
        .then( resposta => { 
            setListaPrevisoes(resposta.data)
        })
        .catch( erro => { 
            console.error(erro);
            setAlertaErro(true)
        });
    },[])
    
    return(
      <>
        <GlobalStyle />
        <Title/>
        <main>
            {!alertaErro ?
                <>
                    <CarouselContainer lista={listaPrevisoes}/>
                </>
                :
                <>
                    <Error />
                </>
            }
        </main>
        <Footer />
      </>       
    )
}

export default App;
