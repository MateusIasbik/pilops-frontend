import { useLocation, useNavigate } from "react-router-dom";
import type { Flight } from "../types";
import Top from "../components/Top";
import styled from "styled-components";
import { IonIcon } from '@ionic/react';
import { trophyOutline } from 'ionicons/icons';
import path from "../../public/path.png";

export default function FlightDetails() {

    // Use o hook useLocation para pegar o estado passado pelo Link
    const location = useLocation();
    const flight: Flight = location.state; // O "flight" vem do estado passado

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
                                    {flight.flightData.balance < 0 ? '-' : ''}{Math.abs(flight.flightData.balance).toLocaleString('pt-BR', {
                                        minimumFractionDigits: 2,
                                        maximumFractionDigits: 2
                                    })}
                                </BalanceStyled>
                            </div>
                        </ContentRewardsStyled>

                        <ContentRewardsStyled>
                            <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#38BDF8"><path d="M852-212 732-332l56-56 120 120-56 56ZM708-692l-56-56 120-120 56 56-120 120Zm-456 0L132-812l56-56 120 120-56 56ZM108-212l-56-56 120-120 56 56-120 120Zm246-75 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-361Z" /></svg>
                            <div>
                                <p>XP CONQUISTADO</p>
                                <span>
                                    {flight.flightData.xp.toLocaleString('pt-BR')}
                                </span>
                            </div>
                        </ContentRewardsStyled>

                        <ContentRewardsStyled>
                            <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#38BDF8"><path d="m363-310 117-71 117 71-31-133 104-90-137-11-53-126-53 126-137 11 104 90-31 133ZM480-28 346-160H160v-186L28-480l132-134v-186h186l134-132 134 132h186v186l132 134-132 134v186H614L480-28Zm0-112 100-100h140v-140l100-100-100-100v-140H580L480-820 380-720H240v140L140-480l100 100v140h140l100 100Zm0-340Z" /></svg>
                            <div>
                                <p>Bônus de missão</p>
                                <span>
                                    {flight.flightData.missionBonus}%
                                </span>
                            </div>
                        </ContentRewardsStyled>
                    </ContentDownStyled>
                </RewardsStyled>

                <InfoStyled>
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
                </InfoStyled>

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

    @media (max-width: 768px) {
        height: auto;
    }
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
        margin-top: 140px;
    
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
    padding: 10px 40px;
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
    color: #E0E0E0;

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        align-items: start;
        margin: 8px 0;
    }
`;

const ContentRewardsStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;

    h3 {        
        font-size: 16px;
        font-weight: 600;
        background-color: #38BDF8;
        color: #1A1A1A;
        padding: 10px;
        border-radius: 50%;
    }

    p {
        font-family: 'Manrope', 'Roboto', sans-serif;
        font-size: 14px;
        font-style: 400;
    }

    span {
        font-family: 'Sora', 'Manrope', 'Roboto', sans-serif;
        font-size: 32px;
        font-weight: 700;
    }

    @media (max-width: 768px) {
        margin: 14px 0;
  }
`;

const BalanceStyled = styled.div<{ $positive: boolean }>`
    font-family: 'Sora', 'Manrope', 'Roboto', sans-serif;
    font-size: 32px;
    font-weight: 700;
    color: ${props => (props.$positive ? '#00FF88' : '#FF0000')};
`;

const InfoStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20px 0;
    padding: 20px 40px;
    background-color: #212121;
    border: 1px solid #444;
    border-radius: 8px;
    font-family: 'Manrope', 'Roboto', sans-serif;

    @media (max-width: 768px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        margin: 20px 0;
        padding: 10px 10px 40px 20px;
    }
`;

const InformationFirstStyled = styled.div`
    display: flex;
    flex-direction: column;
    font-family: 'Manrope', 'Roboto', sans-serif;

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
    
    @media (max-width: 768px) {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 20px auto;
    }
`;

const InformationStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Manrope', 'Roboto', sans-serif;

    p {
        font-size: 16px;
        font-weight: 400;
        color: #FFF;
    }

    h3 {
        font-size: 12px;
        font-weight: 400;
        margin-bottom: 10px;
        color: #E0E0E0;
    }

    @media (max-width: 768px) {
        display: flex;
        align-items: center;
        justify-content: space-around;
        margin: 0px 0;
        padding-top: 20px;
    }
`;

const PathStyled = styled.div`
    display: flex;
    display: flex;
    flex-direction: column;

    img {
        height: 36px;
    }

    div {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        margin: 20px auto;

        img {
            height: 36px;
            width: 110px;
        }
    }
`;

const DepartureArrivalStyled = styled.div`
    width: 100%;
    display: flex;
    color: #E0E0E0;
    align-items: center;
    justify-content: space-around;
    margin-top: 4px;
    font-family: 'Manrope', 'Roboto', sans-serif;
    font-size: 14px;
    font-weight: 400;

    div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 16px;
        font-weight: 600;
        color: #FFFFFF;
    }
`;