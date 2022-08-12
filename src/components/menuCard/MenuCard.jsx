import React, { useEffect, useState } from "react";

import './menucard.css';

import axios from 'axios'


const fetchCategories = () => {
  const url = "https://api.chucknorris.io/jokes/categories";
  return fetch(url)
    .then((response) => { return response.json() })
}






const MenuCard = ({chosen, clickHandler}) => {

  const [categories, setCategories] = useState([]);



  useEffect(() => {
    // side effects.

    fetchCategories().then(res => { console.log(res); setCategories(res) })
  }, [])


  const handleClick = (e) => {  
  const choice = e.target.attributes['data-id'].value
  clickHandler(choice)
  }

  return (
    <div className="menuCard" >
      <ul className="nav nav-pills nav-stacked nav flex-column" style={{ width: "20%" }}>
      {
          categories.map((category) => (
            <li className="nav-item category-item" key={categories.id}>
              <span onClick={handleClick} data-id={category} className={`nav-link ${chosen === category ? 'active' : ''}`} data-bs-toggle="tab"> {category}</span>
            </li>)
          )
        }

      </ul>
    </div>
  )
}

export default MenuCard;



