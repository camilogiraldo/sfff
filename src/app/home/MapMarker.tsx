import { AdvancedMarker, useAdvancedMarkerRef } from "@vis.gl/react-google-maps"
import Image from "next/image"
import { facilityTypeEnum, IFoodTruck } from "../utils/types"


import { useState } from "react"
import { truckIcon } from "../utils/constants"
import AdditionalInfo from "./AdditionalInfo"

const MapMarker = ({ truck }: { truck: IFoodTruck }) => {
  const [markerRef, marker] = useAdvancedMarkerRef();
  const [showInfo, setShowInfo] = useState(false)


  const tClass = {
    [facilityTypeEnum.TRUCK]: 'bg-primary-blue',
    [facilityTypeEnum.PUSH_CART]: 'bg-orange'
  }

  return (
    <>
      <AdvancedMarker
        key={truck.locationid}
        ref={markerRef}
        position={{
          lat: parseFloat(truck.Latitude),
          lng: parseFloat(truck.Longitude)
        }}
      >
        <div
          onMouseOver={() => setShowInfo(true)}
          onMouseOut={() => setShowInfo(false)}
          className="h-full w-full"
          style={{
            width: 30,
            height: 30,
            position: 'absolute',
            top: 0,
            left: 0,

          }}
        />
        <Image
          className={`${tClass[truck.FacilityType]} rounded`}
          src={truckIcon[truck.FacilityType]}
          width={30}
          height={30}
          alt={truck.Applicant}>
        </Image>
      </AdvancedMarker>
      {
        showInfo &&
        <AdditionalInfo truck={truck} marker={marker}></AdditionalInfo>
      }
    </>
  )
}

export default MapMarker;