import { fetchHotels } from "../../api/hotels"

export const getHotels = () => {
  const response = fetchHotels().then(data => {
    return data
  }).catch(() => {
    return []
  }
  )
  return response
};