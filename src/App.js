import React from "react";
import {Routes,Route} from "react-router-dom"
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import ImageInputComponent from "./components/form";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
     <Route path='/' element={<Header />}/>
     <Route path='/resume' element={<ImageInputComponent />}/>
      <Route path='/body' element={<Body />}/>
      
      </Routes>
      
      
    </div>
  );
}


export default App;