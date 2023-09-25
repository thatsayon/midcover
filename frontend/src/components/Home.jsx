import React from "react";
import axios from "axios";
import "../style/home.css";
import { useEffect, useState } from "react";
export default function Home() {
  const [name, setName] = useState();
  const handleClick = () => {
    const uina = {
      name: name,
    };
    axios
      .post("http://127.0.0.1:8000", uina, { responseType: "blob" })
      .then((response) => {
        const pdfBlob = new Blob([response.data], { type: "application/pdf" });

        const url = window.URL.createObjectURL(pdfBlob);
        const a = document.createElement("a");
        a.style.display = "none";
        a.href = url;
        a.download = "sample.pdf";
        document.body.appendChild(a);
        a.click();

        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
      });
    console.log(name);
  };
  return (
    <>
      <div className="maindiv">
        <div>
          <div style={{display:"flex"}}>
            <label for="subname">Subject: </label>
            <input
              type="text"
              id="subname"
              onChange={(e) => setName(e.target.value)}
              style={{width:"100%"}}
            />
          </div>

          <label for="jobno">Job No: </label>
          <input type="text" id="jobno" />

          <label for="jobname">Job Name: </label>
          <input type="text" id="jobname" />
        </div>

        <div>
          <div>
            <label for="name">Name: </label>
            <input type="text" id="name" />

            <label for="roll">Roll: </label>
            <input type="text" id="roll" />
          </div>

          <div>
            <label for="sem">Semester: </label>
            <input type="text" id="sem" />

            <label for="shift">Shift: </label>
            <input type="text" id="shift" />
          </div>

          <div>
            <label for="depart">Department: </label>
            <input type="text" />
          </div>
        </div>
        <button onClick={handleClick}>Click Me</button>
      </div>
    </>
  );
}
