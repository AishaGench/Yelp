import React from "react";
import './App.css';
import BusinessList from "../BusinessList/BusinessList";
import SearchBar from "../SearchBar/SearchBar";

function App() {
  return (
    <div className="App">
      <SearchBar/>
      <BusinessList/>
      
    </div>
  );
}

export default App;