import logotop from "../../public/logotop.png";
import styled from "styled-components";

export default function Top() {
    return (
        <ContainerStyled>
            <img src={logotop} alt="Logo Pilops" />
            <p>
                Your virtual pilop career for Flight Simulator
            </p>
        </ContainerStyled>
    );
}

const ContainerStyled = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Manrope', 'Roboto', sans-serif;
    font-size: 15px;
    font-weight: 400;
        margin-top: 0px;
        padding: 20px 0;
        background-color: #1A1A1A;
        position: fixed;
    
    img {
        width: 197px;
        margin-bottom: 10px;
    }

    p {
        text-align: center;;
    }
`; 