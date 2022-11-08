import { useState } from "react";
import FormRecipes from "./FormRecipes";
import RecipeItem from "./RecipeItem";

const RecipeList = ({pseudo}) => {
    const [recipes, setRecipes] = useState([
        {
            id: 1,
            title: "Pasta",
            ingredients: ["pasta", "tomato sauce"],
            etapes: "Pasta with tomato sauce",
            img:"https://via.placeholder.com/150"
        },
        {
            id: 2,
            title: "Pizza",
            ingredients: "pizza dough, tomato sauce",
            etapes: "Pizza with tomato sauce",
            img:"https://via.placeholder.com/150"
        },
    ]);

    const [newRecipe, setNewRecipe] = useState({});

    const handleChange = (e) => {
        setNewRecipe({
            ...newRecipe,
            [e.target.name]: e.target.value,
        });
    };

    const  handleSubmit = (e) => {
        e.preventDefault();
        newRecipe.id = recipes.length + 1;
        newRecipe.pseudo = pseudo;
        setRecipes([...recipes, newRecipe]);
    };

    const handleDelete = (e,id) => {
        setRecipes(recipes.filter((recipe) => recipe.id !== id));
    }

    return ( 
        <div>
            <h1>Recipe List</h1>
            
            <FormRecipes handleSubmit={handleSubmit} handleChange={handleChange}/>

            <ul className="recipe-list">
            {recipes.map( (recipe,index) => (
             
            <RecipeItem handleDelete={handleDelete} recipe={recipe} key={index}/>

            ))}
        </ul>
        </div>
     );
}
 
export default RecipeList;