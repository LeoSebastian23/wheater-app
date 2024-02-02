import React from "react";

const FiveDayForecast = ({ data }) => {
  if (!data || !data.list || data.list.length === 0) {
    return null; // Evita errores si no hay datos disponibles
  }

  const forecastItems = data.list;

  // Inicializa un objeto para rastrear los días ya mostrados
  const daysShown = {};

  return (

      <div className="container mx-auto p-4">
        <h1 className="mx-auto w-max text-center text-slate-800 font-semibold text-4xl mb-6 bg-teal-50 bg-opacity-55 rounded-full p-4">View all week</h1>
        <div className="flex flex-wrap justify-center max-md:items-center">
          {forecastItems.map((item, index) => {
            const date = new Date(item.dt * 1000).toLocaleDateString("en-US", {
              weekday: "short",
              month: "short",
              day: "numeric",
            });
            const weatherDescription = item.weather[0].description;

            // Si el día ya ha sido mostrado, omitir la repetición
            if (daysShown[date]) {
              return null;
            }

            // Marcar el día como mostrado
            daysShown[date] = true;
            
            return (
              <div key={index} className="bg-slate-500 bg-opacity-55 max-w-sm rounded overflow-hidden shadow-lg mx-4 mb-4">
                <div className="p-4">
                  <h4 className="text-xl font-bold mb-2">{date}</h4>
                  <p className="text-gray-900 text-lg mb-2">{weatherDescription}</p>
                  <div className="flex items-center">
                    <img
                      className="w-10 h-10 mr-2"
                      src={`http://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
                      alt="Weather Icon"
                    />
                    <p className="text-xl font-bold">{item.main.temp.toFixed()} °C</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
  );
};

export default FiveDayForecast;
