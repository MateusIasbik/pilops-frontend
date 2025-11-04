import { useLocation, useNavigate } from "react-router-dom";
import type { Flight } from "../types";
import Top from "../components/Top";
import styled from "styled-components";
import { IonIcon } from '@ionic/react';
import { trophyOutline } from 'ionicons/icons';



export default function FlightDetails() {

    // Use o hook useLocation para pegar o estado passado pelo Link
    const location = useLocation();
    const flight: Flight = location.state; // O "flight" vem do estado passado
    console.log(flight);

    // Use o hook useNavigate para navegar programaticamente
    const navigate = useNavigate();

    // Função para navegar de volta para a página inicial
    const goBack = () => {
        navigate("/"); // Isso vai redirecionar para a página raiz (/)
    };

    return (
        <ContainerStyled>
            <Top>
            </Top>

            <ContentStyled>
                <TitleStyled>
                    <BackButton onClick={goBack}>
                        <StyledLessThan>&lt;</StyledLessThan>
                    </BackButton>
                    <h1>Detalhes do Voo</h1>
                </TitleStyled>

                <RewardsStyled>
                    <TopRewardsStyled>
                        <IonIcon icon={trophyOutline} style={{ color: "#38BDF8", fontSize: "18px" }} />
                        <h2>Recompensas</h2>
                    </TopRewardsStyled>
                    <ContentDownStyled>
                        <ContentRewardsStyled>
                            <h3>P$</h3>
                            <div>
                                <p>Ganhos totais</p>
                                <BalanceStyled $positive={flight.flightData.balance >= 0}>
                                    {flight.flightData.balance < 0 ? '-' : ''}P$ {Math.abs(flight.flightData.balance).toLocaleString('pt-BR', {
                                        minimumFractionDigits: 2,
                                        maximumFractionDigits: 2
                                    })}
                                </BalanceStyled>
                            </div>
                        </ContentRewardsStyled>

                        <ContentRewardsStyled>
                            <h3>P$</h3>
                            <div>
                                <p>Ganhos totais</p>
                                <BalanceStyled $positive={flight.flightData.balance >= 0}>
                                    {flight.flightData.balance < 0 ? '-' : ''}P$ {Math.abs(flight.flightData.balance).toLocaleString('pt-BR', {
                                        minimumFractionDigits: 2,
                                        maximumFractionDigits: 2
                                    })}
                                </BalanceStyled>
                            </div>
                        </ContentRewardsStyled>

                        <ContentRewardsStyled>
                            <h3>P$</h3>
                            <div>
                                <p>Ganhos totais</p>
                                <BalanceStyled $positive={flight.flightData.balance >= 0}>
                                    {flight.flightData.balance < 0 ? '-' : ''}P$ {Math.abs(flight.flightData.balance).toLocaleString('pt-BR', {
                                        minimumFractionDigits: 2,
                                        maximumFractionDigits: 2
                                    })}
                                </BalanceStyled>
                            </div>
                        </ContentRewardsStyled>
                    </ContentDownStyled>

                </RewardsStyled>
            </ContentStyled>
        </ContainerStyled>
    );
}

const ContainerStyled = styled.div`
    background-color: #1A1A1A;
    color: #FFFFFF;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`;

const ContentStyled = styled.div`
    width: 90%;
    
`;

const BackButton = styled.span`
    background-color: #1A1A1A;
    color: #FFF;
    cursor: pointer;
    text-decoration: none;
    font-size: 24px;
    font-family: 'Manrope', 'Roboto', sans-serif;
    font-weight: 700;
    display: flex;
    align-items: center;
`;

const TitleStyled = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    
    h1 {
        font-size: 24px;
        font-weight: 700;
        margin-left: 10px;
        font-family: 'Manrope', 'Roboto', sans-serif;
        padding-top: 2px;
    }
`;

const StyledLessThan = styled.span`
    font-size: 40px;
    color: #FFF;
    margin-right: 4px;
    padding-bottom: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-family: 'Manrope', 'Roboto', sans-serif;

    &:hover {
    color: #ff6347;
    }
`;

const RewardsStyled = styled.div`
    background-color: #212121;
    border: 1px solid #444;
    border-radius: 8px;
    padding: 10px 20px;
    font-family: 'Manrope', 'Roboto', sans-serif;

    h2 {
        font-size: 20px;
        font-weight: 600;
        margin-bottom: 10px;
        color: #FFF;
    }

    p {
        font-size: 16px;
        font-weight: 400;
        color: #E0E0E0;
        margin: 5px 0;
    }
`;

const TopRewardsStyled = styled.div`
    display: flex;
    align-items: center;

    h2 {
        margin-left: 10px;
        padding-top: 10px;
        font-family: 'Sora', 'Manrope', 'Roboto', sans-serif;
        font-size: 18px;
        font-weight: 700;
    }
`;

const ContentDownStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 15px 0;
    font-family: 'Manrope', 'Roboto', sans-serif;
    font-size: 14px;
    font-style: 400;
    color: #E0E0E0;

`;

const ContentRewardsStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    h3 {        
        font-size: 16px;
        font-weight: 600;
        background-color: #38BDF8;
        color: #1A1A1A;
        padding: 10px;
        border-radius: 50%;
        margin-right: 10px;
    }
`;

const BalanceStyled = styled.div<{ $positive: boolean }>`
    font-size: 14px;
    font-weight: 700;
    font-size: 16px;
    font-weight: 600;
    color: ${props => (props.$positive ? '#00FF88' : '#FF0000')};
`;