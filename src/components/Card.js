// import ContextHook from "../hooks/ContextHook";

function Card({ flagUrl, flagAlt, countryName, population, region, capital}) {

  return (
    <div className="card w-full rounded-lg overflow-hidden drop-shadow-xl cursor-pointer hover:scale-105 transition-transform">
        <img src={flagUrl} alt={flagAlt} className="w-full"/>
      <div className="w-full px-5 py-8 ">
        <h2 className="text-xl font-bold">{countryName}</h2>
        <p><span className="font-bold">Population:</span> {population}</p>
        <p><span className="font-bold">Region:</span> {region}</p>
        <p><span className="font-bold">Capital:</span> {capital}</p>
      </div>
    </div>
  )

}

export default Card;