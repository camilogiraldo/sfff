'use client'
import { APIProvider, Map } from "@vis.gl/react-google-maps";
import { IFoodTruck } from "../utils/types";
import MapMarker from "./MapMarker";

const mapCenter = {
  lat: 37.7576928,
  lng: -122.4787992,
}

const defaultZoom = 12

const MapComponent = ({ trucks = [] }: { trucks: IFoodTruck[] }) => {
  return (
    <APIProvider
      version="beta"
      apiKey={(process.env.GOOGLE_MAPS_API_KEY as string)}
    >
      <Map
        style={{ width: '100%', height: '100vh' }}
        defaultCenter={mapCenter}
        defaultZoom={defaultZoom}
        gestureHandling={'greedy'}
        disableDefaultUI={true}
        mapId={process.env.MAP_ID}
      >
        {
          trucks
            .filter(el => el.Latitude && el.Longitude && el.FacilityType)
            .map(truckEl =>
              <MapMarker key={truckEl.locationid} truck={truckEl} />
            )
        }
      </Map>
    </APIProvider>)
}

export default MapComponent;