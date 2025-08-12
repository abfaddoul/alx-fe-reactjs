import React, { useEffect } from 'react';
import { useRecipeStore } from '../store/recipeStore';

const SearchBar = () => {
  const { setSearchTerm, filterRecipes } = useRecipeStore((state) => ({
    setSearchTerm: state.setSearchTerm,
    filterRecipes: state.filterRecipes,
  }));

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    filterRecipes();
  }, [filterRecipes]);

  return (
    <input
      type="text"
      placeholder="Search recipes..."
      onChange={handleChange}
    />
  );
};

export default SearchBar;
