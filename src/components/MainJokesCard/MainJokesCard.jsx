import React ,{useState,useEffect}from "react";
import './mainJokesDisplay.css'


const fetchJokes = (category) => {
    const url = category?`https://api.chucknorris.io/jokes/random?category=${category}`:"https://api.chucknorris.io/jokes/random";
     return fetch(url).then((response)=>{return response.json()}).then((response)=>{ console.log({response});return response.value})
}

const MainJokes = ({category})=>{

    const [jokes, setJokes] = useState()


    useEffect(() => {
        // side effects.

        fetchJokes(category).then(res => {console.log(res); setJokes(res)}) 
    }, [category])

    console.log({category});
    return(
        <div className="mainJokes">
            <h1>you have selected {category} </h1>
            <div className="card" >
                <h1>{jokes}</h1>
               
                <button onClick={()=>  fetchJokes(category).then(res => setJokes(res)) }>
                    <span>give me another joke </span>
                </button>
            </div>        </div>
    )
}

export default MainJokes;
