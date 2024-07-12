import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";



export default function WeatherForecast(props) {
    function handleResponse(response) {
        console.log(response.data);
    }

    console.log(props);
    
    let apiKey = "65fb7046d82c7c4d3377a8b9tfd374o0"
    let longitude = props.coordinate.longitude;
    let latitude = props.coordinate.latitude;
    let apiUrl =` https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}$units=metric`;
    axios.get(apiUrl).then(handleResponse);


    return (
<div className="WeatherForecast">
    <div className="row">
        <div className="col"> 
            <div className="WeatherForecast-day">Thu</div>  
            <WeatherIcon code="clear-sky-day"  size={36}/> 
            <div className="WeatherForecast-temperature">
            <span className="WeatherForecast-temperature-max">19°</span>
            <span className="WeatherForecast-temperature-min">10°</span>
            </div>
         </div>
          </div>
       </div>

);   
}