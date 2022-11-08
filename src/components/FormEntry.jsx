
const FormEntry = (props) => {
    
    const handleChange = (e) => {
        props.setPseudo(e.target.value);
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        if (props.pseudo === '') {
            alert("Veuillez saisir votre nom");
        }else {
            props.setIsOnline(true);
        }
    };

    return ( 
        <form action="submit">
            <input onChange={handleChange} type="text" placeholder="Enter you're name"/>
            <input onClick={handleSubmit} type="submit" value="enter" />

        </form>
     );
}
 
export default FormEntry;