'use client'

import { MultiValue } from "react-select"
import { filterKeys } from "../utils/constants"
import { IFoodTruck } from "../utils/types"
import Filters from "./Filters"
import MapComponent from "./Map"
import { Dispatch, SetStateAction, useCallback, useEffect, useState } from "react"

interface IFilterHandler {
  Applicant: Dispatch<SetStateAction<string[]>>,
  FacilityType: Dispatch<SetStateAction<string[]>>,
  Address: Dispatch<SetStateAction<string[]>>,
  Status: Dispatch<SetStateAction<string[]>>,
}
const MainContainer = ({ trucks, filters }: { trucks: IFoodTruck[], filters: filterKeys }) => {
  const [filteredTrucks, setFilteredTrucks] = useState<IFoodTruck[]>(trucks)
  const [addressFilter, setAddressFilter] = useState<string[]>([])
  const [applicantFilter, setApplicantFilter] = useState<string[]>([])
  const [facilityTypeFilter, setFacilityFilter] = useState<string[]>([])
  const [statusFilter, setStatusFilter] = useState<string[]>([])

  const filterHandler: IFilterHandler = {
    Applicant: setApplicantFilter,
    FacilityType: setFacilityFilter,
    Address: setAddressFilter,
    Status: setStatusFilter,
  }

  const filterFn = (truckEl: IFoodTruck, filterArr: string[], validator: string) => filterArr.length ? filterArr.includes(validator) : true

  const addressFilterFn = useCallback((truckEl: IFoodTruck) => filterFn(truckEl, addressFilter, truckEl.Address), [addressFilter])
  const applicantFilterFn = useCallback((truckEl: IFoodTruck) => filterFn(truckEl, applicantFilter, truckEl.Applicant), [applicantFilter])
  const facilityFilterFn = useCallback((truckEl: IFoodTruck) => filterFn(truckEl, facilityTypeFilter, truckEl.FacilityType), [facilityTypeFilter])
  const statusFilterFn = useCallback((truckEl: IFoodTruck) => filterFn(truckEl, statusFilter, truckEl.Status), [statusFilter])


  useEffect(() => {
    const filtered = trucks
      .filter(addressFilterFn)
      .filter(applicantFilterFn)
      .filter(facilityFilterFn)
      .filter(statusFilterFn)
    setFilteredTrucks([...filtered])

  }, [
    trucks,
    addressFilter,
    applicantFilter,
    facilityTypeFilter,
    statusFilter,
    addressFilterFn,
    applicantFilterFn,
    facilityFilterFn,
    statusFilterFn
  ])

  const onFilterSelected = ({
    filterName,
    value
  }: {
    filterName: string,
    value: MultiValue<{ label: string, value: string }>
  }) => {
    let values: string[] = [];
    for (const val of value.values()) {
      values = [...values, val.value]
    }
    filterHandler[filterName as keyof IFilterHandler](values)
  }

  return (
    <main>
      <div className="flex flex-col-reverse md:flex-row">
        <div className="w-full md:w-9/12">
          <MapComponent trucks={filteredTrucks} />
        </div>
        <div className="w-full md:w-3/12 border-b md:border-l">
          <Filters filters={filters} onFilterSelected={onFilterSelected} />
        </div>
      </div>
    </main>
  )
}

export default MainContainer