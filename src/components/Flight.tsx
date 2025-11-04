import path from "../../public/path.png";
import styled from "styled-components";
import type { Flight } from "../types";
import { Link } from "react-router-dom";

type FlightProps = {
    // readonly indica que a propriedade não pode ser alterada dentro do componente
    readonly flight: Flight;
};

export default function Flight({ flight }: FlightProps) {

    return (
        <Link to={`/flights/${flight.id}`} state={flight} style={{ textDecoration: "none", color: "inherit", width: "100%", display: "flex", justifyContent: "center" }}>

            <ContainerStyled>
                <InformationFirstStyled>
                    <h2>{flight.aircraft.name}</h2>
                    <p>{flight.aircraft.airline}</p>
                </InformationFirstStyled>

                <PathStyled>
                    <img src={path} alt="trajeto" />
                    <DepartureArrivalStyled>
                        <div>{flight.flightData.route.from}</div>
                        <div>{flight.flightData.route.to}</div>
                    </DepartureArrivalStyled>
                </PathStyled>

                <InformationStyled>
                    <h3>Matrícula</h3>
                    <p>{flight.aircraft.registration}</p>
                </InformationStyled>

                <InformationStyled>
                    <h3>Data</h3>
                    <p>
                        {new Date(flight.flightData.date).toLocaleDateString('pt-BR')}
                    </p>
                </InformationStyled>

                <InformationStyled>
                    <h3>Saldo</h3>
                    <BalanceStyled $positive={flight.flightData.balance >= 0}>
                        {flight.flightData.balance < 0 ? '-' : ''}P$ {Math.abs(flight.flightData.balance).toLocaleString('pt-BR', {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2
                        })}
                    </BalanceStyled>
                </InformationStyled>
            </ContainerStyled>

        </Link>
    );
}

const ContainerStyled = styled.div`
    width: 90%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    border: 1px solid #444;
    background-color: #212121;
    border-radius: 5px;
    height: 94px;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 21px;
`;

const InformationFirstStyled = styled.div`
    display: flex;
    flex-direction: column;
    font-family: 'Manrope', 'Roboto', sans-serif;
    margin-left: 30px;

    h2 {
        font-size: 16px;
        font-weight: 600;
        margin-bottom: 10px;
        color: #FFF;
    }

    p {
        font-size: 14px;
        font-weight: 400;
        color: #E0E0E0;
    }
`;

const InformationStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Manrope', 'Roboto', sans-serif;

    p {
        font-size: 14px;
        font-weight: 400;
        color: #E0E0E0;
    }

    h3 {
        font-size: 12px;
        font-weight: 400;
        margin-bottom: 10px;
        color: #E0E0E0;
    }
`;

const PathStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
        height: 36px;
    }

    div {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
    }
`;

const DepartureArrivalStyled = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 4px;
    font-family: 'Manrope', 'Roboto', sans-serif;
    font-size: 14px;
    font-weight: 400;
`;

const BalanceStyled = styled.div<{ $positive: boolean }>`
    font-size: 14px;
    font-weight: 700;
    font-size: 16px;
    font-weight: 600;
    color: ${props => (props.$positive ? '#00FF88' : '#FF0000')};
`;