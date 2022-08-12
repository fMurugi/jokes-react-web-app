import React, { useState } from "react";
import MenuCard from "../menuCard/MenuCard";
import MainJokes from "../MainJokesCard/MainJokesCard";
import './Home.css';

export const Home = ()=>{

    const [category,setCategory] =useState()
    return(
        <div className="home">
            {
                console.log({category})
            }
        
            <MenuCard chosen={category} clickHandler={setCategory}/>
            <MainJokes category ={category}/>

        </div>
    )
}

