import styled from "styled-components";

const StyledFooter = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    background: rgb(73,89,142);
    background: linear-gradient(90deg, rgba(73,89,142,1) 0%, rgba(57,71,114,1) 48%, rgba(40,52,90,1) 100%);
    color: white;
    font-weight: 500;
    width: 100%;
    position: fixed;
    bottom: 0;

    @media screen and (max-width: 900px) {
        font-size: 12px;
        position: absolute;
    }
`

const Footer = () => {
    return(
        <StyledFooter>
            Desenvolvido por - Vinicius Brian Bolzani
        </StyledFooter>
    )
}

export default Footer;