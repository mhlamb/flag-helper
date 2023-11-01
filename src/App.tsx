import axios from "axios";
import { useState, useEffect } from "react";
import { Country } from "./types/types";
import "./App.css";
import Navbar from "./components/Navbar";
import InfoBox from "./components/InfoBox";
import RangeButton from "./components/RangeButton";
import Search from "./components/Search";
import RangeNumber from "./components/RangeNumber";

function App() {
  const [searchRange, setSearchRange] = useState<number>(0);
  const [countries, setCountries] = useState<Country[] | null>(null);
  const [searchInput, setSearchInput] = useState<string | "">("");

  useEffect(() => {
    axios
      .get(`https://restcountries.com/v3.1/all`)
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        const newCountries: Country[] = [];
        data.map((country: Country, index: number) => {
          const range = searchRange * 9;

          if (index < range || index >= range + 9) return;

          console.log(country.name.common);

          const newCountry = {
            name: { common: country.name.common },
            capital: country.capital,
            area: country.area,
            population: country.population,
            flags: { svg: country.flags.svg },
          };

          newCountries.push(newCountry);
        });
        setCountries(newCountries);
      });
  }, [searchRange]);

  useEffect(() => {
    if (!searchInput) return;
    console.log("searchig", searchInput);
    axios
      .get(`https://restcountries.com/v3.1/name/${searchInput}`)
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        const newCountries: Country[] = [];

        data.map((country: Country, index: number) => {
          if (index >= 9) return;

          const newCountry = {
            name: { common: country.name.common },
            capital: country.capital,
            area: country.area,
            population: country.population,
            flags: { svg: country.flags.svg },
          };

          newCountries.push(newCountry);
        });
        setCountries(newCountries);
      });
  }, [searchInput]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
    event.target.value === " " && setSearchRange(0);
  };

  const handlePrevious = () => {
    searchRange > 0 && setSearchRange(searchRange - 1);
  };

  const handleNext = () => {
    searchRange * 9 + 9 <= 250 && setSearchRange(searchRange + 1);
  };

  return (
    <>
      <Navbar />
      <div className="flex align-center justify-center">
        <Search
          searchInput={searchInput}
          onInputChange={handleInputChange}
        ></Search>
      </div>

      {!searchInput && (
        <>
          <div className="flex align-center justify-center pb-3">
            <RangeButton onclick={handlePrevious}>Previous</RangeButton>
            <RangeButton onclick={handleNext}>Next</RangeButton>
          </div>
          <RangeNumber searchRange={searchRange}></RangeNumber>
        </>
      )}

      {countries && (
        <div className="grid grid-cols-3">
          {countries.map((country: Country, index: number) => (
            <InfoBox key={index} country={country} />
          ))}
        </div>
      )}
    </>
  );
}

export default App;
