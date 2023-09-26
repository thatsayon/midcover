import React from "react";
import axios from "axios";
import "../style/home.css";
import { useEffect, useState } from "react";
export default function Home() {
  const [sub, setSub] = useState();
  const [jobN, setJobN] = useState();
  const [jobName, setJobName] = useState();
  const [name, setName] = useState();
  const [roll, setRoll] = useState();
  const [sem, setSem] = useState();
  const [shift, setShift] = useState();
  const [depart, setDepart] = useState();
  const handleClick = () => {
    const uina = {
      sub: sub,
      jobN: jobN,
      jobName: jobName,
      name: name,
      roll: roll,
      sem: sem,
      shift: shift,
      depart: depart,
    };
    console.log(uina)
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
    
  };
  return (
    <>
      <div className="maindiv">
        <div>
          <div style={{ display: "flex" }}>
            <label for="subname">Subject: </label>
            <input
              type="text"
              id="subname"
              onChange={(e) => setSub(e.target.value)}
              style={{ width: "100%" }}
            />
          </div>

          <label for="jobno">Job No: </label>
          <input
            type="text"
            id="jobno"
            onChange={(e) => setJobN(e.target.value)}
          />

          <label for="jobname">Job Name: </label>
          <input
            type="text"
            id="jobname"
            onChange={(e) => setJobName(e.target.value)}
          />
        </div>

        <div className="userdiv">
          <div className="nameroll">
            <label for="name">Name: </label>
            <input
              type="text"
              id="name"
              onChange={(e) => setName(e.target.value)}
            />

            <label for="roll">Roll: </label>
            <input
              type="text"
              id="roll"
              onChange={(e) => setRoll(e.target.value)}
            />
          </div>

          <div>
            <label for="sem">Semester: </label>
            <input
              type="text"
              id="sem"
              onChange={(e) => setSem(e.target.value)}
            />

            <label for="shift">Shift: </label>
            <input
              type="text"
              id="shift"
              onChange={(e) => setShift(e.target.value)}
            />
          </div>

          <div>
            <label for="depart">Department: </label>
            <input type="text" onChange={(e) => setDepart(e.target.value)} />
          </div>
        </div>
        <button onClick={handleClick}>Click Me</button>
      </div>
    </>
  );
}
