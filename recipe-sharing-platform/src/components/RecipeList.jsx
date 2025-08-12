import { useRecipeStore } from '../store/recipeStore';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const RecipeList = () => {
  const { filteredRecipes, searchTerm, filterRecipes } = useRecipeStore((state) => ({
    filteredRecipes: state.filteredRecipes,
    searchTerm: state.searchTerm,
    filterRecipes: state.filterRecipes,
  }));

  useEffect(() => {
    filterRecipes();
  }, [searchTerm, filterRecipes]);

  return (
    <div>
      {filteredRecipes.map((recipe) => (
        <div key={recipe.id}>
          <Link to={`/recipe/${recipe.id}`}>
            <h3>{recipe.title}</h3>
          </Link>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
