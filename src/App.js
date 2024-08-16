import React from 'react';
import Meal from './Components/Meal';
import  './Components/style.css';
import { Route,Routes } from 'react-router-dom';
import RecipeInfo from './Components/RecipeInfo';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Meal/>}/>
        <Route path="/:MealId" element={<RecipeInfo/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
