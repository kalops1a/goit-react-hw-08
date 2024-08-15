import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../redux/filters/slice'; 
import { selectFilter } from '../redux/filters/selectors'; 

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <input
      type="text"
      value={filter}
      onChange={handleChange}
      placeholder="Search contacts"
    />
  );
};

export default SearchBox;