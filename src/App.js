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
    <div className="App">
      <header className="App-header">
        <h1>Universal Weather App</h1>
        <p>Tempreture: {weather.tempreture}°C</p>
        <p>Condition: {weather.condition}</p>
      </header>
    </div>
  );
}

export default App;