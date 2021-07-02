import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  return (
    <div>
      <MySpaTag />
    </div>
  );
}

function MySpaTag() {
  const [list] = useState([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
  return (
    <div>
      <h2 className="bg-dark text-light p-3 sticky-top text-center">
        Project Book
      </h2>

      {list.map((item, index) => (
        <div className="bg-secondary text-light p-3 m-3 rounded">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Voluptatibus, excepturi.
        </div>
      ))}
    </div>
  );
}

export default App;
