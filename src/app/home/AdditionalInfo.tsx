import { InfoWindow } from "@vis.gl/react-google-maps";
import { IFoodTruck } from "../utils/types";

const statusClass = {
  EXPIRED: 'bg-red',
  REQUESTED: 'bg-gray',
  APPROVED: 'bg-green',
  SUSPEND: 'bg-yellow',
}

const AdditionalInfo = ({
  truck,
  marker
}: { truck: IFoodTruck; marker: google.maps.marker.AdvancedMarkerElement | null }) => {
  const foodTypes = truck.FoodItems.split(':')

  return (
    <InfoWindow className="max-w-76" headerDisabled={true} anchor={marker}>
      <div className="flex flex-col">
        <h5> {truck.Applicant} - <span className="capitalize">{truck.FacilityType}</span> - <span className={`${statusClass[truck.Status]} px-2 rounded lowercase capitalize text-white`}>{truck.Status}</span></h5>
        <span className="italic mb-2">{truck.Address}</span>
        <span className="italic mb-2">Hours: {truck.dayshours || 'No info provided '}</span>
        <span className="italic">Location Description: {truck.LocationDescription}</span>
        <div className="flex flex-wrap mt-4">
          {foodTypes.map((type, i) => <span key={i} className="font-bold text-white rounded bg-pink p-2 mr-2 mb-2 capitalize">{type}</span>)}
        </div>
      </div>
    </InfoWindow>
  )
}

export default AdditionalInfo;