import React, {useState, useEffect} from "react";

const App = ({data}) => {
  const [weather, setWeather] = useState(data);

  useEffect(()=>{
    const timer = setInterval(()=>{
      setWeather({
        tempreture: Math.floor(Math.random() * 30) + 10,
        condition: ['Sunny', 'Cloudy', 'Rainy'][Math.floor(Math.random() * 3)]
      })
    },5000);
    return() => clearInterval(timer);
  },[]);

  return (
  <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
    <div className="relative py-3 sm:max-w-xl sm:mx-auto">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
      <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
        <h1 className="text-2xl font-bold mb-5">Universal Weather App</h1>
        <p className="text-lg">Temperature: {weather.temperature}°C</p>
        <p className="text-lg">Condition: {weather.condition}</p>
      </div>
    </div>
  </div>
  );
}

export default App;