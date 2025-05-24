import Filters from "../components/Filter/Filters";
import Main from "../components/watches-grid/Main";

export default function Home() {
  return (
    <>
      <div className="container max-md:px-1 mx-auto py-8">
        <h2 className="text-3xl font-bold">Luxury Watches</h2>
      </div>
      <div className="container max-md:px-1 mx-auto flex flex-col lg:flex-row gap-8">
        <Filters />
        <Main />
      </div>
    </>
  );
}
