import React,  { useState} from "react";
import axios from  "axios";
import FormattedDate from "./FormattedDate";
import "./Weather.css";






export default function Weather(props) {
    
    const [weatherData, setWeatherData] = useState({ready: false});

    
    function handleResponse(response) {
        
        setWeatherData({
          temperature: response.data.temperature.current,
          description: response.data.condition.description,
          date: new Date(response.data.dt *1000),
          iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
         // humidity: response.data.main.humidity,
          wind: response.data.wind.speed,
          city: response.data.city,  
          ready: true,
        });
        
    }

        if (weatherData.ready) {
            return ( 
            <div className="Weather">
                <form>
                    <div className="row">
                        <div className="col-9">
                            <input
                            type="search"
                            placeholder="Enter a city.."
                            className="form-control"
                            autoFocus="on"
                            />
        
                        </div>
                        <div className="col-3">
                            <input
                            type="submit" value="search"
                            className="btn btn-primary" w-100 ="true"/>
        
                        </div>
        
                    </div>
                </form>
                <h1>{weatherData.city}</h1>
                <ul>
                    <li>
                        <FormattedDate date={weatherData.date}/>
                    </li>
                    <li className="text capitalize">
                        {weatherData.description}</li>
                </ul>
                <div className="row mt-3" >
                    <div className="col-6">
                        <div className="clearfix">
                        <img src={weatherData.iconUrl}
                        alt={weatherData.description}
                        className="float-left"
                        />
                        <div className="float-left">
                        <span className="temperature">{Math.round(weatherData.temperature)}</span>
                        <span className="unit">°C</span>
                        </div>
                        </div>
                        </div>
                        <div className="col-6">
                        <ul>
                            
                            <li> Humidity: {weatherData.humidity}</li>
                            <li>Wind: {weatherData.wind}</li>
                        </ul>
                    </div>
                </div>
                </div>
            ) 
            
        }else {
            const apiKey = "65fb7046d82c7c4d3377a8b9tfd374o0";
            
            let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
            axios.get(apiUrl).then(handleResponse);

            return "Loading....";
            
            
        }
        }






   