import styled from "styled-components";
import Top from './components/Top';
import Historical from './components/Historical';
import Flight from "./components/Flight";
import FlightDetails from "./components/FlightDetails";
import api from "./api";
import { useEffect, useState } from "react";
import type { Flight as FlightType } from "./types";
import loadingAnimation from "../public/alif travel.json";
import Lottie from "lottie-react";
import { Route, Routes } from "react-router-dom";

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
    return <LoadingStyled>
      {/* Lottie é uma biblioteca que permite usar um arquivo json para se tornar uma animação*/}
      <Lottie animationData={loadingAnimation} loop={true} style={{ width: 400, height: 400 }} />
    </LoadingStyled>;
  }

  return (
    <Routes>
      <Route path="/" element={
          <ContainerStyled>
            <Top />
            <Historical />
            {flight.map(f => (
              <Flight key={f.id} flight={f} />
            ))}
          </ContainerStyled>
        }
      />
      <Route path="/flights/:id" element={<FlightDetails />}/>
    </Routes>
  )
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

const LoadingStyled = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-family: 'Manrope', 'Roboto', sans-serif;
  background-color: #1A1A1A;
`;
