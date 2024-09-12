

import { filtersArr, filterKeys, IFilter } from "./constants";
import { IFoodTruck } from "./types";

const useFilters = (trucks: IFoodTruck[]): filterKeys => {
  const filterProps = trucks
    .map((truck: IFoodTruck) =>
      filtersArr
        .reduce((acc, curr) =>
          ({ ...acc, [curr]: truck[curr as keyof IFoodTruck] }),
          {} as filterKeys[])
    )

  const filterKeyVal = filtersArr
    .reduce((acc, curr) => ({
      ...acc, [curr]: filterProps.map((el): string => `${el[curr as keyof typeof el]}`)
    }), [] as IFilter[])

  // @ts-expect-error typing warn
  return filtersArr.reduce((acc, curr) => ({
    ...acc,
    [curr]: // @ts-expect-error typing warn
      [...new Set(filterKeyVal[curr])]
        .filter(el => el && el !== 'undefined').map(el => ({ value: el, label: el }))
  }), [])

}

export default useFilters;