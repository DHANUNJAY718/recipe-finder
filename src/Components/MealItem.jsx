import React from "react";
import { useNavigate } from "react-router-dom";

const MealItem = ({ data }) => {
  let navigate=useNavigate();
  return (
    <div className="meal-container">
      {!data
        ? "Not found"
        : data.map((item) => {
            return (
              <div className="card" key={item.idMeal} onClick={()=>{navigate(`/${item.idMeal}`)}}>
                <img
                  src={item.strMealThumb}
                  alt=""

                />
                <h3>{item.strMeal}</h3>
              </div>
            );
          })}
    </div>
  );
};

export default MealItem;
