import Filters from "./components/Filters";
import Header from "./components/Header";
import Main from "./components/Main";
import FilterProvider from "./components/FilterProvider";

export default function App() {
  return (
    <div className="wrapper min-h-dvh">
      <div className="container mx-auto py-12">
        <h2 className="text-3xl font-bold">Luxury Watches</h2>
      </div>
      <FilterProvider>
        <Header />
        <div className="container mx-auto flex flex-col lg:flex-row gap-8">
          <Filters />
          <Main />
        </div>
      </FilterProvider>
    </div>
  );
}
