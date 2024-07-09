import React,  { useState} from "react";
import axios from  "axios";

import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import "./Weather.css";






export default function Weather(props) {
    
    const [weatherData, setWeatherData] = useState({ready: false});
    const [city, setCity] =useState(props.defaultCity);

    
    function handleResponse(response) {
        
        setWeatherData({
          temperature: response.data.temperature.current,
          description: response.data.condition.description,
          date: new Date(response.data.time *1000),
          
          iconUrl:response.data.condition.icon_url,
        
         humidity: response.data.temperature.humidity,
          wind: response.data.wind.speed,
          city: response.data.city,  
          ready: true,
        });
        
    }
    function search() {
        const apiKey = "65fb7046d82c7c4d3377a8b9tfd374o0";
            
        let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);

    }
    function handleSubmit(event) {
        event.preventDefault();
        search();
    }
    function handleCityChange(event) {
        setCity(event.target.value);

    }

        if (weatherData.ready) {
        return(
            <div className="Weather">
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-9">
                            <input
                            type="search"
                            placeholder="Enter a city.."
                            className="form-control"
                            autoFocus="on"
                            onChange={handleCityChange}
                            />
        
                        </div>
                        <div className="col-3">
                            <input
                            type="submit" value="search"
                            className="btn btn-primary" w-100 ="true"/>
        
                        </div>
        
                    </div>
                </form>
               
                
                <WeatherInfo data={weatherData} />
                <WeatherForecast />
                </div>
            
            );
            
        }
        else {
            search();
           
            return "Loading....";
            
            
        }
        }






   