// import { useState } from 'react'
import styled from "styled-components";
import Top from './components/Top';
import Historical from './components/Historical';
import Flight from "./components/Flight";

export default function App() {
  // const [count, setCount] = useState(0)

  return (
      <ContainerStyled>
        <Top/>
        <Historical/>
        <Flight/>
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

