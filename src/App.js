// import { CircularProgress } from "@mui/material";
// src/App.js

import React from "react";
import { useWeatherContext } from "./context/WheaterContext";
import CustomInput from "./components/CustomInput";
import HomeWheater from "./components/HomeWheater";
import FiveDayForecast from "./components/FiveDayForecast";
import "./App.css";
import { useState } from "react";
import Modal from "./components/Modal";
import { CircularProgress } from "@mui/material";

function App() {
  const {
    setCityName,
    inputText,
    setInputText,
    currentWeatherData,
    forecastData,
    loading,
  } = useWeatherContext();

  const [showFiveDayForecast, setShowFiveDayForecast] = useState(false);

  const handleClick = () => {
    setCityName(inputText);
    setInputText("");
  };

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      setCityName(e.target.value);
      setInputText("");
    }
  };

  const toggleFiveDayForecast = () => {
    setShowFiveDayForecast(!showFiveDayForecast);
  };

  return (
    <div className="min-h-screen bg-cover bg-center" style={{ backgroundImage: 'url("/assets/bgApp.jpg")' }}>
      <div className="container mx-auto p-4">
        {loading ? (
           <CircularProgress />
        ) : (
          <>
            <CustomInput
              label="Search location"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={handleSearch}
              onButtonClick={handleClick}
              modal={Modal}
            />

            {showFiveDayForecast ? (
              <FiveDayForecast data={forecastData} />
            ) : (
              <HomeWheater data={currentWeatherData} />
            )}

            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
              onClick={toggleFiveDayForecast}
            >
              {showFiveDayForecast ? "Details of today" : "View all week"}
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default App;

