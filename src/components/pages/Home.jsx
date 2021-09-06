import { getAllCategories } from '../../api';
import { useState, useEffect } from 'react';
import Preloader from '../Preloader';
import CategoryList from '../CategoryList';
import Search from '../Search';

const Home = () => {
  const [catalog, setCatalog] = useState([]);
  const [filteredCatalog, setFilteredCatalog] = useState([]);

  const handleSearch = (str) => {
    setFilteredCatalog(
      catalog.filter(item => 
        item.strCategory.toLowerCase().includes(str.toLowerCase())
      )
    );
  };

  useEffect(() => {
    getAllCategories().then((data) => {
      setCatalog(data.categories);
      setFilteredCatalog(data.categories);
    });
  }, []);

  return (
    <>
      <Search cb={handleSearch} />
      {!catalog.length 
        ? <Preloader /> 
        : <CategoryList catalog={filteredCatalog} />
        }
    </>
  );
};

export default Home;
