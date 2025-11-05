import styled from "styled-components";
import Flight from "./Flight";
import type { Flight as FlightType } from "../types";

interface FlightsProps {
    readonly flights: FlightType[];
    // readonly indica que a propriedade não pode ser alterada dentro do componente
}

export default function Flights({ flights }: FlightsProps) {
    return (
        <ContainerStyled>
            <HistoricalStyled>
                <h1>Histórico de Voos</h1>
                <p>Visualize seu histórico completo de voos realizados</p>
            </HistoricalStyled>
            {flights.map(f => (
                <Flight key={f.id} flight={f} />
            ))}
        </ContainerStyled>
    );
}

const ContainerStyled = styled.div`
  background-color: #1A1A1A;
  color: #FFFFFF;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const HistoricalStyled = styled.div`
    width: 90%;
    display: flex;
    font-family: 'Sora', 'Roboto', sans-serif;
    flex-direction: column;
    margin-bottom: 2%;
    margin-top: 140px;

    h1 {
        font-size: 24px;
        font-weight: 700;
        padding-bottom: 12px;
    }

    p {
        font-size: 18px;
        font-weight: 400;
    }
`;