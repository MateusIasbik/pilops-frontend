import styled from "styled-components";
import Top from "./components/Top";
import FlightDetails from "./components/FlightDetails";
import Flights from "./components/Flights";
import api from "./api";
import { useEffect, useState } from "react";
import type { Flight as FlightType } from "./types";
import loadingAnimation from "../public/alif travel.json";
import Lottie from "lottie-react";
import { Route, Routes } from "react-router-dom";

export default function App() {

  const [flights, setFlights] = useState<FlightType[]>([]);

  useEffect(() => {
    api.get<FlightType[]>("/flights")
      .then(response => {
        setFlights(response.data);
      })
      .catch(error => {
        console.error("Erro ao buscar voos:", error);
      });
  }, []);

  if (flights.length === 0) {
    return <LoadingStyled>
      {/* Lottie é uma biblioteca que permite usar um arquivo json para se tornar uma animação*/}
      <Lottie animationData={loadingAnimation} loop={true} style={{ width: 300, height: 300 }} />
    </LoadingStyled>;
  }

  return (
    <>
      <Top />
      <Routes>
        <Route path="/" element={<Flights flights={flights} />} />
        <Route path="/flights/:id" element={<FlightDetails />} />
      </Routes>
    </>
  )
}

const LoadingStyled = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-family: 'Manrope', 'Roboto', sans-serif;
  background-color: #1A1A1A;
  
  @media (max-width: 768px) {
    padding: 0 4px;
    /* margin: 0; */
    padding: 0;
  }
`;
