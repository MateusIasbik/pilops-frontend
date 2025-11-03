import path from "../../public/path.png";
import styled from "styled-components";
import type { AxiosInstance } from "axios";
import { useEffect, useState } from "react";
import type { Flight } from "../types";

type FlightProps = {
    api: AxiosInstance;
};

export default function Flight({ api }: FlightProps) {
    const [flight, setFlight] = useState<Flight | null>(null);

    useEffect(() => {
        api.get<Flight[]>("/flights")
            .then(response => {
                setFlight(response.data[0]);
            })
            .catch(error => {
                console.error("Error fetching flight:", error);
            });
    }, [api]);

    if (!flight) {
        return <div>Carregando voo...</div>;
    }

    return (
        <ContainerStyled>
            <InformationStyled>
                <h2>{flight.aircraft.name}</h2>
                <p>{flight.aircraft.airline}</p>
            </InformationStyled>

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
    );
}

const ContainerStyled = styled.div`
    width: 96%;
    display: flex;
    border: 1px solid #444;
    background-color: #212121;
    border-radius: 5px;
    height: 94px;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 21px;
`;

const InformationStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Manrope', 'Roboto', sans-serif;

    h2 {
        font-size: 16px;
        font-weight: 600;
        margin-bottom: 10px;
        color: #FFF;
        ;
    }

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