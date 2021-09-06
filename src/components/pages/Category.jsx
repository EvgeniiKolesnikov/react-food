import { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { getFilteredCategory } from '../../api';
import MealList from '../MealList';
import Preloader from '../Preloader';

const Category = () => {
  const { goBack } = useHistory();
  const { name } = useParams();
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    getFilteredCategory(name).then((data) => setMeals(data.meals));
  }, [name]);

  return (
    <>
      <button className='btn btn-back' onClick={goBack}>
        Back
      </button>
      {!meals.length ? <Preloader /> : <MealList meals={meals} />}
    </>
  );
};

export default Category;
