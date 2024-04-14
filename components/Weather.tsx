import React from "react";
import Icons from "./Icons";
import ErrorPage from "next/error";
import { IWeatherData } from "@/types";
const Weather = ({ data, city }:{data:IWeatherData, city:string}) => {
  //console.log(data);
  if (
    data.name != "" &&
    city != "" &&
    data.name.toUpperCase() != city.toUpperCase()
  ) {
    return (
      <div>
        <ErrorPage statusCode={404} />
      </div>
    );
  } else {
    return (
      <div className="font-burtons relative flex flex-col justify-between max-w-[500] w-full m-auto text-white z-[10]">
        <div className="relative flex justify-between pt-12">
          <div className="flex flex-col items-center">
            <Icons data={data} />
            <p className="text-2xl">{data.weather[0].main}</p>
          </div>
          <p className="text-9xl">{data.main.temp - 273}&#176;C</p>
        </div>
        <div className="bg-gray-500/30 relative p-8 rounded-md">
          <p className="text-2xl text-center pb-6">Weather in {data.name}</p>
          <div className="flex justify-between text-center">
            <div>
              <p className="font-bold text-2xl">
                {data.main.feels_like - 273}&#176;C
              </p>
              <p className="text-xl">Feels Like</p>
            </div>
            <div>
              <p className="font-bold text-2xl">
                {data.main.humidity.toFixed(0)}%
              </p>
              <p className="text-xl">Humidity</p>
            </div>
            <div>
              <p className="font-bold text-2xl">
                {data.wind.speed.toFixed(0)} m/s
              </p>
              <p className="text-xl">Wind</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Weather;