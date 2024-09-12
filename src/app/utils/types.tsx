export enum facilityTypeEnum {
  TRUCK = 'Truck',
  PUSH_CART = 'Push Cart'
}

enum statusEnum {
  EXPIRED = 'EXPIRED',
  REQUESTED = "REQUESTED",
  APPROVED = 'APPROVED',
  SUSPEND = 'SUSPEND'
}

type TypeFacility = facilityTypeEnum.TRUCK | facilityTypeEnum.PUSH_CART

type TypeStatus = statusEnum.EXPIRED | statusEnum.REQUESTED | statusEnum.APPROVED | statusEnum.SUSPEND

export interface IFoodTruck {
  locationid: string;
  Applicant: string;
  FacilityType: TypeFacility;
  cnn: string
  LocationDescription: string
  Address: string
  blocklot: string
  block: string
  lot: string
  permit: string
  Status: TypeStatus
  FoodItems: string
  X: string
  Y: string
  Latitude: string
  Longitude: string
  Schedule: string
  dayshours: string
  NOISent: string
  Approved: string
  Received: string
  PriorPermit: string
  ExpirationDate: string
  Location: string
  "Fire Prevention Districts": string
  "Police Districts": string
  "Supervisor Districts": string
  "Zip Codes": string
  "Neighborhoods(old)": string
}