export type Aircraft = {
  name: string;
  registration: string;
  airline: string;
};

export type Route = {
  from: string;
  to: string;
};

export type FlightData = {
  date: string;
  balance: number;
  route: Route;
  xp: number;
  missionBonus: number;
};

export type Flight = {
  id: string;
  aircraft: Aircraft;
  flightData: FlightData;
};
