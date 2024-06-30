import React, {useState} from "react";
import axios from  "axios";
import "./Weather.css";






export default function Weather() {
    const [ready, setReady] = useState(false);
    const [temperature, setTemperature] = useState(null);
    function handleResponse(response) {
        console.log(response.data);
        setTemperature(response.data.main.temp);
        setReady(true);
    }

        if (ready) {
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
                            className="btn btn-primary" w-100/>
        
                        </div>
        
                    </div>
                </form>
                <h1>New york</h1>
                <ul>
                    <li>Wednesday 7:00</li>
                    <li>Mostly cloudy</li>
                </ul>
                <div className="row mt-3" >
                    <div className="col-6">
                        <div className="clearfix">
                        <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                        alt="mostly cloudy"
                        className="float-left"
                        />
                        <div className="float-left">
                        <span className="temperature">{temperature}</span>
                        <span className="unit">°C</span>
                        </div>
                        </div>
                        </div>
                        <div className="col-6">
                        <ul>
                            <li>Precipitation: 15%</li>
                            <li>Humidity: 72%</li>
                            <li>Wind: 13km/hr</li>
                        </ul>
                    </div>
                </div>
                </div>
            ) 
            
        }else {
            const apiKey = "65fb7046d82c7c4d3377a8b9tfd374o0";
            let city = "New york"
            let apiUrl = `https://api.shecodes.io/weather/v1/current?q=${city}&appid=${apiKey}&units=metric`;
            axios.get(apiUrl).then(handleResponse);

            return "Loading....";
            
            
        }
           
        

            
        }




   