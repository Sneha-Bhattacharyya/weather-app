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
  // console.log(city);

  return (
    <div className="bg-gradient-to-bl from-[#2df1fe] to-[#094672] ">
      <main className="h-screen px-10 md:px-20">
        <section className="min-h-max">
          <nav className=" py-3.5 mb-4 flex justify-between sm:py-5">
            <h1 className=" text-2xl font-bold text-[#090670] ">Titai</h1>
            <ul className=" flex items-center">
              <li>
                <BsFillMoonStarsFill className=" cursor-pointer text-2xl text-white" />
              </li>
            </ul>
          </nav>
          <div className=" text-center p-5">
            <h2 className=" text-3xl text-[#02232e] py-2  font-medium md:text-6xl">
              Weather-Forecasting App
            </h2>
          </div>
          <div className="relative flex justify-center items-center max-w-[800px] w-full m-auto pt-4 px-4 text-[#02232e]">
            <form
              onSubmit={fetchWeather}
              className="flex justify-between items-center w-full m-auto p-3 bg-transparent border border-[#02232e] text-[#02232e] rounded-3xl"
            >
              <div>
                <input
                  onChange={(e) => setCity(e.target.value)}
                  className="bg-transparent border-none text-[#02232e] focus:outline-none text-2xl"
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