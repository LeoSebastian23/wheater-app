import React, { createContext, useContext, useState, useEffect } from "react";

const WeatherContext = createContext();

export function useWeatherContext() {
  return useContext(WeatherContext);
}

export function WeatherProvider({ children }) {
  const [cityName, setCityName] = useState("Mar del plata");
  const [inputText, setInputText] = useState("");
  const [currentWeatherData, setCurrentWeatherData] = useState({});
  const [forecastData, setForecastData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Solicitud para obtener el clima actual
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
    )
      .then((res) => {
        if (res.status === 200) {
          error && setError(false);
          return res.json();
        } else {
          throw new Error("Something went wrong");
        }
      })
      .then((data) => {
        setCurrentWeatherData(data);
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [cityName, error]);

  useEffect(() => {
    // Solicitud para obtener el pronóstico de 5 días
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
    )
      .then((res) => {
        if (res.status === 200) {
          error && setError(false);
          return res.json();
        } else {
          throw new Error("Something went wrong");
        }
      })
      .then((data) => {
        setForecastData(data);
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [cityName, error]);

  return (
    <WeatherContext.Provider
      value={{
        cityName,
        setCityName,
        inputText,
        setInputText,
        currentWeatherData,
        forecastData,
        error,
        loading,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
}