import "./App.css";
import { useEffect, useState } from "react";
import Country from "./components/Country";

function App() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://countries-search-data-prod-812920491762.asia-south1.run.app/countries"
        );
        if (response.status === 200) {
          const data = await response.json();
          console.log(data)
          setData(data);
        } else {
          console.error("Error fetching data:", response.status);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  // Get filtered data based on search input
  const filteredData = data.filter((country) =>
    country.common.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section>
      <div className="bg-gray-200 p-4 rounded-b-xl text-center">
        <input
          type="text"
          placeholder="Search countries"
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg bg-white px-4 max-w-xl focus:outline-none focus:ring focus:ring-green-500"
        />
      </div>
      <div className="container mx-auto py-10 grid grid-cols-2 p-4 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {(search ? filteredData : data).map((country) => (
          <Country key={country.png} country={country} />
        ))}
      </div>
    </section>
  );
}

export default App;
