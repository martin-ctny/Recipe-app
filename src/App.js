import { useState } from "react";
import FormEntry from "./components/FormEntry";
import RecipeList from "./components/RecipeList";


function App() {

  const [pseudo, setPseudo] = useState('');
  const [isOnline, setIsOnline] = useState(false);
  

  return (
    <div className="App">
       {
       isOnline ? (
     
       <RecipeList pseudo={pseudo}/>
        ) : (
          <FormEntry pseudo={pseudo} setPseudo={setPseudo} setIsOnline={setIsOnline}/>        )
    }

    </div>
  );
}

export default App;
