import React, {useState} from "react";
import WeatherIcon from "./WeatherIcon";
import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherForecast.css";
import axios from "axios";



export default function WeatherForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);
    function handleResponse(response) {
        console.log(response.data);
        setForecast(response.data.daily);
        setLoaded(true);
    }

    if (loaded) {
    
        return (
         <div className="WeatherForecast">
         <div className="row">
         {forecast.map(function (dailyForecast, index) {
         if (index < 6) {
          return (

         <div className="col" key = {index}> 
          <WeatherForecastDay data={dailyForecast} />
            </div>
                );

              }
                       
              })}
                    
                 </div>
              </div>
            
            );   
       
    
    } else {
        let apiKey = "65fb7046d82c7c4d3377a8b9tfd374o0"
        let longitude = props.coordinates.longitude;
        let latitude = props.coordinates.latitude;
        let apiUrl =`https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);

        return null;
       

    }
    
  

  
}