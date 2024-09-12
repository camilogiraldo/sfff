'use client'
import { MouseEvent, useState } from "react";
import Select, { MultiValue } from 'react-select'
import { filterKeys, filtersArr } from "../utils/constants";

const Filters = ({
  filters: fieldFilters,
  onFilterSelected: emitFilter
}: {
  filters: filterKeys,
  onFilterSelected: (args: { filterName: string, value: MultiValue<{ label: string, value: string }> }) => void
}) => {
  const [applied, setApplied] = useState<string[]>([])
  const [filters, setFilters] = useState<string[]>(filtersArr)

  const onFilterApplied = (e: MouseEvent<HTMLSpanElement>) => {
    const value = (e.target as HTMLElement).innerHTML
    setApplied([...applied, value])
    setFilters(filters.filter(el => el !== value))
  }

  const onFilterRemoved = (value: string) => {
    setApplied(applied.filter(el => el !== value))
    setFilters([...filters, value])
    emitFilter({ filterName: value, value: [] })
  }

  const onFilterSelected = (filterName: string, value: MultiValue<{ label: string, value: string }>) => {
    emitFilter({ filterName, value })
  }

  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-10/12 h-max mb-4 md:h-full md:mb-0">
        <div className="flex justify-center uppercase font-bold text-primary-blue mt-2 mb-4">Filter by</div>
        <h5>Applied Filters</h5>
        <div className="flex flex-col mt-2 mb-10">
          {
            applied.length ?
              applied.map((filter: string, i: number) =>
                <div key={`${filter}_${i}`} className="flex h-full items-center">
                  <Select
                    options={fieldFilters[filter as keyof filterKeys] as unknown as filterKeys[]}
                    isMulti
                    className="flex-grow mr-2 mb-2"
                    placeholder={filter}
                    onChange={(value) => onFilterSelected(filter, value as unknown as MultiValue<{ label: string, value: string }>)}
                  ></Select>
                  <span

                    className="border h-full px-2"
                    onClick={() => onFilterRemoved(filter)}>x
                  </span>
                </div>
              ) : <span>Select a filter to find your preferred food</span>}
        </div>

        <div className="flex flex-col">
          <h5>Available Filters</h5>
          <div className="flex flex-wrap mt-2">
            {
              filters.length ?
                filters.map((filter, i) =>
                  <span
                    className="border rounded-full px-2 mr-2 mb-2"
                    key={`${filter}_${i}`}
                    onClick={onFilterApplied}
                  >
                    {filter}
                  </span>
                ) :
                <span>No More Filters Available</span>
            }
          </div>

        </div>
      </div>
    </div>
  )
};

export default Filters;