import axios from "axios";
import { useEffect, useState } from "react"

function App() {
  const [name, setName] = useState();
  const handleClick = () => {
    const uina = {
      "name": name
    };
    axios.post("http://127.0.0.1:8000", uina).then((response) => {
      console.log(response.status)
    })
    console.log(name)
  }
  return (
    <>
      <h1>Hello World</h1> 
      <input type="text" onChange={(e) => setName(e.target.value)}/>
      <button onClick={handleClick}>Click Me</button>
    </>
  )
}

export default App
