import styled from "styled-components";
import Top from './components/Top';
import Historical from './components/Historical';
import Flight from "./components/Flight";
import api from "./api";
import { useEffect, useState } from "react";
import type { Flight as FlightType } from "./types";

export default function App() {

  const [flight, setFlight] = useState<FlightType[]>([]);

  useEffect(() => {
  api.get<FlightType[]>("/flights")
    .then(response => {
      setFlight(response.data);
    })
    .catch(error => {
      console.error("Erro ao buscar voos:", error);
    });
}, []);


  if (flight.length === 0) {
    return <div>Carregando voos...</div>;
  }

  return (
    <ContainerStyled>
      <Top />
      <Historical />
      {flight.map(f => (
        <Flight key={f.id} flight={f} />
      ))}
    </ContainerStyled>
  )
}

const ContainerStyled = styled.div`
  background-color: #1A1A1A;
  color: #FFFFFF;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

