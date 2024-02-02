import React from "react";
import { Slide } from "@mui/material";
import "../App.css";
import { WiHumidity, WiCloudyGusts, WiThermometer } from "react-icons/wi";

const HomeWeather = ({ data,loading }) => {
  return (
    <div className="flex flex-col text-center justify-center items-center text-slate-50">
      <div className="bg-slate-900 bg-opacity-55 p-6 rounded-lg shadow-xl xl:w-1/3 md:w-2/3 sm:w-2/3 max-sm:w-4/5">
        {/* Ciudad y Temperatura actual */}
        <div className="text-5xl font-bold mb-4">{data.name}</div>
        <div className="text-6xl font-bold mb-4">
          {data.main.temp.toFixed()} °C
        </div>

        {/* Condiciones climáticas actuales */}
        <div className="flex justify-center items-center bg-blue-400 bg-opacity-35 rounded-3xl mx-auto w-max pr-5">
          <img
            src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt=""
            className="weather-icon"
          />
          <div className="text-2xl font-medium">{data.weather[0].main}</div>
        </div>

        
        {/* Temperaturas mínima y máxima */}
        
        <div className="mt-4">
          <h2 className="text-3xl italic">
            Min: {data.main.temp_min.toFixed()} °C
          </h2>
          <h2 className="text-3xl italic">
            Max: {data.main.temp_max.toFixed()} °C
          </h2>
        </div>

        {/* Información adicional */}
        <Slide direction="right" timeout={800} in={!loading}>
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="flex flex-col items-center text-center bg-slate-900 bg-opacity-90 rounded-xl p-2">
              <WiHumidity style={{ color: "#p87", fontSize: "50px" }} />
              <p>Humidity</p>
              <h1 className="text-xl font-bold">
                {data.main.humidity.toFixed()}%
              </h1>
            </div>
            <div className="flex flex-col items-center text-center bg-slate-900 bg-opacity-90 rounded-xl p-2">
              <WiCloudyGusts style={{ color: "#p87", fontSize: "50px" }} />
              <p>Wind</p>
              <h1 className="text-xl font-bold">
                {data.wind.speed.toFixed()} km/h
              </h1>
            </div>
            <div className="flex flex-col items-center text-center bg-slate-900 bg-opacity-90 rounded-xl p-2">
              <WiThermometer style={{ color: "#p87", fontSize: "50px" }} />
              <p>Feels Like</p>
              <h1 className="text-xl font-bold">
                {data.main.feels_like.toFixed()} °C
              </h1>
            </div>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default HomeWeather;
