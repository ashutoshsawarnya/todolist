import {useContext, useEffect, useState} from "react"
import axios from "axios"
import Todos from './components/Todos';
import {TodoContext} from "./context/TodoProvider"
import "../node_modules/bootstrap/dist/css/bootstrap.css"



function App() {

  const[todos, setTodos] = useState();

  useEffect(() =>{
    
    fetchTodos()
},[])


const fetchTodos = async () =>{
  const response = await axios.get("http://localhost:3002/todos")
  setTodos(response.data)
}
  



  
  return (
   
    <div className="App">
      <h4>Todos App</h4>
      
     
      <TodoContext.Provider value={{todos, setTodos, fetchTodos}}>
      <Todos/>
        </TodoContext.Provider>
    
      
    </div>
   
  );
}

export default App;
