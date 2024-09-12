import MainContainer from "./home/MainContainer";
import { fetchTrucks } from "./utils/fetchTrucks";
import { IFoodTruck } from "./utils/types";
import useFilters from "./utils/useFilters";

export default async function Home() {
  const trucks: IFoodTruck[] = await fetchTrucks() as IFoodTruck[]
  const filters = useFilters(trucks)

  return (
    <div className="min-h-screen border-t border-gray">
      <MainContainer trucks={trucks} filters={filters} />
    </div>
  );
}
