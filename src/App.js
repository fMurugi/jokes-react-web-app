import React, { useEffect, useState } from "react";
import axios from  'axios'

import './App.css'

import { Home} from  './components/home/Home';

import MenuCard  from "./components/menuCard/MenuCard";
import MainJokes from "./components/MainJokesCard/MainJokesCard";





// const fetchCategories = () => {
//     const url = "https://api.chucknorris.io/jokes/categories";
//      return fetch(url).then((response)=>{return response.json()}).then((response)=>{ console.log({response});return response.value})
//   }

 
const App = ()=>{

    


    return(
        <div className="app">
           
            <Home></Home>


       </div>
       
    )
}

export default App;