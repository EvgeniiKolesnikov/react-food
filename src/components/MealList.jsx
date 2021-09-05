import Meal from "./Meal";

const MealList = ({meals}) => {
  // console.log(meals);
  return ( <div className="list">
    {meals.map(meal => (
      <Meal key={meal.idMeal} {...meal} />
    ))}
  </div> );
}

export default MealList;