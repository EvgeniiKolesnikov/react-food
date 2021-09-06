import { useState } from 'react';

const Search = ({ cb = Function.prototype }) => {
  const [value, setValue] = useState('');

  const handleKey = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  }

  const handleSubmit = () => { 
    cb(value);
  }
  return (
    <div className='row'>
      <div className='input-field col s12'>
        <input
          type='search'
          className='form-control'
          id='search-fiels'
          placeholder='search'
          value={value}
          onKeyDown={handleKey}
          onChange={e => setValue(e.target.value)}
        />
        <button 
          className="btn blue" 
          style={{position:'absolute', top: 0, right: 0}} 
          onClick={handleSubmit}
          >Search</button>
      </div>

    </div>
  );
};

export default Search;
