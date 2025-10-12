export type HotelProps = {
  id: number;
  name: string;
  location: string;
  rating: number;
  imageUrl: string;
  datesOfTravel: string[];
  boardBasis: string;
  rooms: Rooms[];
}

export enum BoardBasis {
  allInclusive = 'All inclusive',
  bedAndBreakfast = 'Bed & Breakfast',
  beakfastIncluded = 'Breakfast Included',
  roomOnlu = 'Room Only',
  halfBoard = 'Half Board',
  fullBoard = 'Full Board',
  selfCatering = 'Self Catering'
}

export type Rooms = {
  roomType: string;
  amount: number;
}