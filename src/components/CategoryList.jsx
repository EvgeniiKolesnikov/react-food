import CategoryItem from './CategoryItem';

const CategoryList = ({ catalog }) => {
  return (
    <div className='list'>
      {catalog.map((elem) => (
        <CategoryItem key={elem.idCategory} {...elem} />
      ))}
    </div>
  );
};

export default CategoryList;
