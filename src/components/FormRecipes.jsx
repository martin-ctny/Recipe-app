const FormRecipes = ({handleChange, handleSubmit}) => {
    return ( 
    <form action="submit">
    <input onChange={(e) => handleChange(e)} type="text" name="title" />
    <input onChange={(e) => handleChange(e)} type="text" name="ingredient" />
    <input onChange={(e) => handleChange(e)} type="text" name="etapes" />
    <input onChange={(e) => handleChange(e)} type="text" name="img" />
    
    <input onClick={(e) => handleSubmit(e)} type="submit" />
</form> );
}
 
export default FormRecipes;