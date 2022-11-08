const RecipeItem = ({recipe,handleDelete}) => {
    return ( 
         <li>
        <h2>{recipe.title}</h2>
        <p>{recipe.ingredient}</p>
        <p>{recipe.etapes}</p>
        <img src={recipe.img} alt="" />
        <button onClick={(e) => handleDelete(e, recipe.id)}> Delete</button>
    </li> );
}
 
export default RecipeItem;