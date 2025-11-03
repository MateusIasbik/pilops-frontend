import path from "../../public/path.png";
import styled from "styled-components";

export default function Flight() {
    return (
        <ContainerStyled>
            <InformationStyled>
                <h2>Name</h2>
                <p>Airline</p>
            </InformationStyled>

            <PathStyled>
                <img src={path} alt="trajeto" />
                <DepartureArrivalStyled>
                    <div>from</div>
                    <div>to</div>
                </DepartureArrivalStyled>
            </PathStyled>

            <InformationStyled>
                <h3>Matrícula</h3>
                <p>REGISTRATION</p>
            </InformationStyled>

            <InformationStyled>
                <h3>Data</h3>
                <p>10/10/2010</p>
            </InformationStyled>

            <InformationStyled>
                <h3>Saldo</h3>
                <BalanceStyled>P$ 5.000</BalanceStyled>
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

const BalanceStyled = styled.div`
    font-size: 14px;
    font-weight: 700;
    font-size: 16px;
    font-weight: 600;
    color: green
`;