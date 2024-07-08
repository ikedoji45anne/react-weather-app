import React from "react";
import Weather from "./Weather";
import './App.css';

    export default function App() {
  return (
    <div className="App">
      <div className="container">
     
     <Weather defaultCity= "New york"/>
     <footer>
      
      This project was coded by{" "} <a href="https://github.com/ikedoji45anne/react-weather-app" target="_blank" rel="noreferrer">Ikedoji Anne</a> and is{" "} 
      <a href="https://github.com/ikedoji45anne/react-weather-app" target="_blank" rel="noreferrer">
      open-sourced on github
      </a> {" "} and <a href="https://react-weather-app-4ur7.vercel.app/"  target="_blank" rel="noreferrer">hosted on Vercel</a>
     </footer>
     </div>
     

    </div>
  );
  
}

 
