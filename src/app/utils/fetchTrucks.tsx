import Papa from 'papaparse';
import { IFoodTruck } from './types';

export const fetchTrucks = async (): Promise<IFoodTruck[]> => {
  try {
    const res = await fetch(process.env.URL + 'api/trucks', { method: 'GET' })
    const dataString = await res.text()
    const { data = [] }: { data: IFoodTruck[] } = Papa.parse(dataString, { header: true })

    return data;
  } catch (error) {
    return []
  }
}