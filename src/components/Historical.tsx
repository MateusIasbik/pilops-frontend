import styled from "styled-components";

export default function Historical() {
    return (
        <HistoricalStyled>
            <h1>
                Histórico de Voos
            </h1>
            <p>
                Visualize seu histórico completo de voos realizados
            </p>
        </HistoricalStyled>
    );
}

const HistoricalStyled = styled.div`
    width: 96%;
    display: flex;
    flex-direction: column;
    margin-bottom: 2%;

    h1 {
        font-family: 'Sora', 'Roboto', sans-serif;
        font-size: 24px;
        font-weight: 700;
        padding-bottom: 12px;
    }

    p {
        font-family: 'Sora', 'Roboto', sans-serif;
        font-size: 18px;
        font-weight: 400;
    }
`;