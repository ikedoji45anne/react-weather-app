import React from "react";
import Weather from "./Weather";
import './App.css';

    export default function App() {
  return (
    <div className="App">
      <div className="container">
     
     <Weather defaultCity= "New york"/>
     <footer>
      
      This project was coded by{" "} Ikedoji Anne and is{" "} 
      <a href="https://github.com/ikedoji45anne/react-weather-app" target="_blank" rel="noreferrer">
      open-sourced on github
      </a>
     </footer>
     </div>
     

    </div>
  );
  
}

 
