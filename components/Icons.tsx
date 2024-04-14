import { IWeatherData } from "@/types";
import React from "react";
import {
  WiCloud,
  WiCloudy,
  WiDayCloudy,
  WiDayRain,
  WiDaySunny,
  WiFog,
  WiNightClear,
  WiNightCloudy,
  WiRain,
  WiSnowflakeCold,
  WiThunderstorm,
} from "react-icons/wi";
const Icons = ({ data }:{data: IWeatherData}) => {
  if (data.weather[0].id >= 200 && data.weather[0].id <= 232) {
    return (
      <div>
        <WiThunderstorm size={100} />
      </div>
    );
  }
  if (data.weather[0].id >= 500 && data.weather[0].id <= 504) {
    return (
      <div>
        <WiDayRain size={100} />
      </div>
    );
  }
  if (data.weather[0].id >= 520 && data.weather[0].id <= 531) {
    return (
      <div>
        <WiRain size={100} />
      </div>
    );
  }
  if (
    (data.weather[0].id >= 600 && data.weather[0].id <= 622) ||
    data.weather[0].id == 511
  ) {
    return (
      <div>
        <WiSnowflakeCold size={100} />
      </div>
    );
  }
  if (data.weather[0].id >= 701 && data.weather[0].id <= 781) {
    return (
      <div>
        <WiFog size={100} />
      </div>
    );
  }
  if (data.weather[0].id == 800 && data.weather[0].icon === "01d") {
    return (
      <div>
        <WiDaySunny size={100} />
      </div>
    );
  }
  if (data.weather[0].id == 800 && data.weather[0].icon === "01n") {
    return (
      <div>
        <WiNightClear size={100} />
      </div>
    );
  }
  if (data.weather[0].id == 801 && data.weather[0].icon === "02d") {
    return (
      <div>
        <WiDayCloudy size={100} />
      </div>
    );
  }
  if (data.weather[0].id == 801 && data.weather[0].icon === "02n") {
    return (
      <div>
        <WiNightCloudy size={100} />
      </div>
    );
  }
  if (data.weather[0].id == 802) {
    return (
      <div>
        <WiCloud size={100} />
      </div>
    );
  }
  if (data.weather[0].id == 803 || data.weather[0].id == 804) {
    return (
      <div>
        <WiCloudy size={100} />
      </div>
    );
  }
};

export default Icons;