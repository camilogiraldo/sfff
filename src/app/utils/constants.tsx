import { facilityTypeEnum } from "./types";
import foodTruckIcon from '../../../public/food-truck.svg'
import pushCartIcon from '../../../public/pushcart.svg'

export const truckIcon = {
  [facilityTypeEnum.TRUCK]: foodTruckIcon,
  [facilityTypeEnum.PUSH_CART]: pushCartIcon
}


export const filtersArr = [
  'Applicant',
  'FacilityType',
  'Address',
  'Status'
]

export enum filterKeys {
  Applicant = 'Applicant',
  FacilityType = 'Facility Type',
  Address = 'Address',
  Status = 'Status'
}

export interface IFilter {
  Applicant: string[]
  FacilityType: string[]
  Address: string[],
  Status: string[]
}