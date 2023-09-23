import axios from "axios";
import { useEffect, useState } from "react"

function App() {
  const [name, setName] = useState();
  const handleClick = () => {
    const uina = {
      "name": name
    };
    axios.post("http://127.0.0.1:8000", uina, {responseType: 'blob'}).then((response) => {
      const pdfBlob = new Blob([response.data], {type: 'application/pdf'});

      const url = window.URL.createObjectURL(pdfBlob);
      const a = document.createElement('a');
      a.style.display = 'none';
      a.href = url;
      a.download = 'sample.pdf';
      document.body.appendChild(a);
      a.click();
      
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
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
