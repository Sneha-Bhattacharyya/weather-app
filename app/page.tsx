"use client"
import { BsFillMoonStarsFill, BsSearch } from "react-icons/bs";
import { useState } from "react";
import axios from "axios";
import Weather from "../components/Weather";

export default function Home() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=standard&appid=${process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY}`;

  const fetchWeather = (e) => {
    e.preventDefault();
    setLoading(true);
    axios.get(url).then((response) => {
      setWeather(response.data);
      // console.log(response.data);
    });
    setCity("");
    setLoading(false);
  };

  return (
    <div className="bg-gray-900">
      <main className="h-screen px-10 md:px-20">
        <section className="min-h-max">
          <nav className=" py-3.5 mb-4 flex justify-between sm:py-5">
            <h1 className=" text-xl text-white">Titai</h1>
            <ul className=" flex items-center">
              <li>
                <BsFillMoonStarsFill className=" cursor-pointer text-2xl text-white" />
              </li>
            </ul>
          </nav>
          <div className=" text-center p-5">
            <h2 className="font-burtons text-3xl py-2 text-teal-500 font-medium md:text-6xl">
              WeatherForecasting App
            </h2>
          </div>
          <div className="relative flex justify-center items-center max-w-[800px] w-full m-auto pt-4 px-4 text-teal-500">
            <form
              onSubmit={fetchWeather}
              className="flex justify-between items-center w-full m-auto p-3 bg-transparent border border-teal-500 text-teal-500 rounded-2xl"
            >
              <div>
                <input
                  onChange={(e) => setCity(e.target.value)}
                  className="bg-transparent border-none text-teal-500 focus:outline-none text-2xl"
                  type="text"
                  placeholder="Search city"
                />
              </div>
              <button>
                <BsSearch size={20} />
              </button>
            </form>
          </div>
        </section>
        {weather?.main && <Weather data={weather} city={city} />}
      </main>
    </div>
  );
}