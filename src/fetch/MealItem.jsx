import React from 'react'

function MealItem({data: mealData}) {

  const {strMeal: mealName} = mealData;
  return (
    <div>{mealName}</div>
  )
}

export default MealItem