import hotelsResponse from '../assets/utils/hotels.json'
import { HotelProps } from '../types/types';


export const fetchHotels = (): Promise<HotelProps[]> =>
  new Promise((resolve) => {
    setTimeout(() => resolve(hotelsResponse), 600);
  });
  

export const fetchHotelById = (name: string): Promise<HotelProps | undefined> =>
  new Promise((resolve) => {
    setTimeout(() => resolve(hotelsResponse.find(h => h.name === name)), 600);
  });