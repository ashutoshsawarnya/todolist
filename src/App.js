import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react"
import axios from "axios"

function App() {
  const [name,setName] = useState("")
  const [name1,setName1] = useState("")

  useEffect(() =>{
         const fetchPosts = async () =>{
           const response = await axios.get("https://jsonplaceholder.typicode.com/todos")
           setName(response.data)
         }
         fetchPosts()
  },[])

  const postData = name && name.map((test,index) =>{
    return(
      
      <table border="2">

        <thead>
          <tr>
            <td>Id:</td>
            <td>Title:</td>
          </tr>
          </thead>
          <tbody>
                <tr key={index}>
                  
                  <td>{test.id}</td>
                
                
                 
                  <td>{test.title}</td>
                </tr>
                </tbody>
      </table>
      
    )
  })
  return (
    <div className="App">
      Posting Data from API 👍
      {
        name && postData
      }
      
    </div>
  );
}

export default App;
