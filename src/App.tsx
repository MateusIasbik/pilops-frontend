// import { useState } from 'react'
import styled from "styled-components";
import Top from './components/Top';
import Historical from './components/Historical';
import Flight from "./components/Flight";
import api from "./api";

export default function App() {
  return (
      <ContainerStyled>
        <Top/>
        <Historical/>
        <Flight api={api}/>
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

