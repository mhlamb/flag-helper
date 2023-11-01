import { Country } from "../types/types";

interface Props {
  country: Country;
}
const InfoBox = ({ country }: Props) => {
  return (
    <div className="flex flex-col text-center p-5 m-5 bg-slate-300 rounded-lg justify-evenly items-center info-box">
      <img src={country.flags.svg} width="90%" />

      <div className="text-xl">
        <h1 className="font-bold">{country.name.common}</h1>
        <p>Capital: {country.name.common}</p>
        <p>Population: {country.population}</p>
        <p>Area: {country.area} km²</p>
      </div>
    </div>
  );
};

export default InfoBox;
