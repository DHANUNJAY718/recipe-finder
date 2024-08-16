import React from "react";
import MealItem from "./MealItem";
import RecipeIndex from "./RecipeIndex";
import { useState,useEffect } from "react";

const Meal = () => {
  const [url,setUrl] = useState("https:/www.themealdb.com/api/json/v1/1/search.php?f=a");
  const [item,setItem] =useState();
  const [show,setShow]=useState(false)
  const [search,setSearch]=useState("")
  useEffect(() => {
    fetch(url)
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then(data => {
        if (data.meals) {
            console.log(data.meals)
          setItem(data.meals);
          setShow(true);
        } else {
          setShow(false);
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setShow(false);
      });
  }, [url]);
  

  const setIndex=(alpha)=>{
    setUrl(`https:/www.themealdb.com/api/json/v1/1/search.php?f=${alpha}`)
  }

  const searchRecipe=(e)=>{
    if(e.key==='Enter'){
        setUrl(`https:/www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
    }
  }

  return (
    <div>
      <div className="main">
        <div className="heading">
          <h1>Find your Recipe</h1>
          <h4>
            find your recipe and ingredients needed
          </h4>
        </div>
        <div className="searchBox">
          <input type="search" className="search-bar" onChange={e=>setSearch(e.target.value)} onKeyPress={searchRecipe} />
        </div>
        <div className="container">
          
          {
            show ? <MealItem data={item}/>:"Data not found"
          }
        </div>
        <div className="indexContainer">
          <RecipeIndex alphaIndex={(alpha)=>{setIndex(alpha)}}/>
        </div>
      </div>
    </div>
  );
};

export default Meal;
